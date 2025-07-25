import {Button,Field} from "./Tools";
import styles from "@/styles/Registerform.module.css"
import { data } from "@/public/Data";
import { useState } from "react";

let options = data.map((e)=>{
    return <option value={e.title} className="text-black" name={e.id}>{e.title}</option>
})

export default function RegisterForm(){
    let [ImageUrl,setImageUrl] = useState("")

    function handleSelection(e){
        let item = data.filter((record)=>{
            if(record.title == e.currentTarget.value){
                return record
            }
        })
        if(item.length>0){
            setImageUrl(item[0]['image']) 
        }
        else{
            setImageUrl(null)
        }
    }

    return(
        <form action="" className={styles.form}>
            <div className={styles.div1}>
                <Field For="College Name"/>
                <div className={styles.div2}>
                    <div>
                        <label htmlFor="events">Select Event:</label><br />
                        <select id="events" name="event" onChange={handleSelection}>
                            <option value="None" className="text-black">None</option>
                            {options}
                        </select>
                    </div>
                    <img src={ImageUrl} alt="No Event Selected" className={styles.img}/>
                </div>
                <Field For="Your Name"/>
            </div>
            <br />
            <div className={styles.div3}>
                <Field For="Current Year"/>
                <Field For="Course"/>
                <Field For="Address"/>
                <Field For="Contact Number"/>
            </div>
            <div className={styles.div4}>
                <label htmlFor="MOP">Mode of Payement</label>
                <span className="text-[20px]">&#8377;1400</span>
                <label htmlFor="online">Online</label>
                <input type="radio" name="mode" id="online" value="online"/>
                <label htmlFor="offline">Offline</label>
                <input type="radio" name="mode" id="offline" value="offline"/>
            </div>
            <Button>Submit</Button>
        </form>
    )
}