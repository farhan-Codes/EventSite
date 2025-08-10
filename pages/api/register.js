import { db } from "@/lib/db";
import {getImageUrl,UploadImage} from "@/lib/cloud"
import {IncomingForm} from "formidable";

export const config={
    api:{
        bodyParser:false,
    },
};

async function getId() {
    let [[record]] = await db.query(`SELECT prefix, count, mailcount FROM countholder where id ='1' `);
    let  {prefix,count,mailcount}= record
    let id = prefix + String(count);
    return {id,count,mailcount}
}

async function getData(req,res){
    if (req.method === 'POST'){
        return new Promise((resolve, reject) => {

            const form = new IncomingForm({multiples:false,keepExtensions:true});

            form.parse(req,async (err,fields,files)=>{

                if(err){reject(err); res.status(400).json({error:err.message})} //Handling Error

                //main Form Form Handling Logic
                let {id,count,mailcount} = await getId() // acquiring Data from the countholder table
                let data = {}
                let screenShot = null

                if (Object.entries(files).length != 0){
                    try{
                        screenShot = await getImageUrl(files.screenshot[0].filepath,id) //Acquiring The Uploaded Image Url
                    }catch(err){
                        reject(err);
                        res.status(400).json(err.message)
                        return
                    }
                }
                // loop responsble for populating Data
                for (let key in fields){
                    if(key != 'events'){
                        data[key] = (fields[key]).toString()
                    }
                    else{
                        data[key] = (fields[key])
                    }
                }

                // Destructuring Data And Return The Produced Data
                let {name,cname,course,year,email,phone,events,mode} = data 
                let college_details = [cname,year,course];
                events = events.map((e)=>{return e.split(',')[0]});
                resolve([id,name,college_details,events,email,phone,mode,screenShot,count,mailcount])
        });
    });
  }}



async function RegisterPlayer(req,res) {
    let [id,name,college_details,events,email,phone,payment,screenShot,count,mailcount] = await getData(req,res);
    console.log(id,name,college_details,events,email,phone,payment,screenShot,count,mailcount)
    const queries = `
    INSERT INTO players(
    id,name,college_details,
    events,email,phone,payment_mode
    ,screenshot) VALUES (?, ?, ?, ?, ?, ?, ?, ?);
    UPDATE countholder SET count = ${count+=1} WHERE id=1;
    `;
    try{
        await db.query(queries,[
            id,name,JSON.stringify(college_details),JSON.stringify(events),email,phone,payment,screenShot
        ]);
    }catch(err){
        res.status(500).json({error:err})
    }
}


export default async function Handler(req,res){
    try{
        if(req.method === 'POST'){
            await RegisterPlayer(req,res);
            res.status(200).json({sucess:true})    
        }else{
                res.status(403).json({message:'NOT ALLOWED'})
        }
    }catch(err){
        res.status(500).json({Error:err});
    }
}
