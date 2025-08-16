import { db } from "@/lib/db";
import {getImageUrl,UploadImage} from "@/lib/cloud"
import {IncomingForm} from "formidable";
import { SendEmail } from "@/lib/email";

export const config={
    api:{
        bodyParser:false,
    },
};

async function getId(res) {
        let [[record]] = await db.query(`SELECT prefix, count FROM countholder where id ='1' `);
        let  {prefix,count}= record
        let id = prefix + String(count);
        return {id,count}
}

async function getData(req,id){
        return new Promise((resolve, reject) => {

            const form = new IncomingForm({multiples:false,keepExtensions:true});

            form.parse(req,async (err,fields,files)=>{

                if(err){reject(err)} //Handling Error

                //main Form Form Handling Logic
                let data = {}
                let screenShot = null

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
                let {name,cname,course,year,email,phone,amount,events,mode} = data;
                let [[checkDuplicate]] = await db.query(`SELECT COUNT(*) FROM players WHERE email = '${email}'`);
                if (checkDuplicate['COUNT(*)'] != 0){ 
                    reject({message:"You Are Already Registered",http_code:400})
                    return
                }
                if (Object.entries(files).length != 0){
                    try{
                        screenShot = await getImageUrl(files.screenshot[0].filepath,id) //Acquiring The Uploaded Image Url
                    }catch(err){
                        reject(err);
                        return;
                    }
                }
                let college_details = [cname,year,course];
                events = events.map((e)=>{return e.split(',')[0]});
                resolve([name,college_details,events,email,phone,Number(amount),mode,screenShot])
        });
    });
  }



async function RegisterPlayer(id,name,college_details,events,email,phone,amount,payment,screenShot,count) {
    const queries = `
    INSERT INTO players(
        id,name,college_details,
        events,email,phone,amount,payment_mode
        ,screenshot) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);
        UPDATE countholder SET count = ${count+=1} WHERE id=1;
        `;
        try{
            await db.query(queries,[
                id,name,JSON.stringify(college_details),JSON.stringify(events),email,phone,amount,payment,screenShot
            ]);
            await SendEmail({type:'register',subject:'Welcome Player!',id:id,events:events,offline:(payment=='offline')?true:false});
        }catch(err){
            throw err
        }
    }
    
    
    export default async function Handler(req,res){
    try{
        if(req.method === 'POST'){
        let {id,count} = await getId(res)
        let [name,college_details,events,email,phone,amount,payment,screenShot] = await getData(req,id);
        await RegisterPlayer(id,name,college_details,events,email,phone,amount,payment,screenShot,count);
        res.status(200).json({message:"Player Registered Sucessfully!\n Email sent will be sent Shortly \n [Please do check your spam folder once]"}) 
        }else{
        res.status(403).json({message:'NOT ALLOWED'})
    }
    }catch(err){
        if(err['http_code']){
            res.status(400).json({message:err.message})
        }
        if(err.code === 'ER_DUP_ENTRY'){
            res.status(409).json({message:"Player already registered on the given email!"})
        }
        if(err.code === 'ER_USER_LIMIT_REACHED'){
            res.status(409).json({message:"Server Busy please Try again After 1 hour!"})
        }
        res.status(500).json({message:err.message})
    }
}
