import {Button,Field,SystemPopup} from "./Tools";
import styles from "@/styles/Registerform.module.css"
import data from "@/components/Data";
import { useContext, useState } from "react";
import { EventContext } from "@/conext";
import { ShowContext,InfoContext } from "@/conext";

export default function RegisterForm(){
    const {Event} = useContext(EventContext);
    const {setshowRegister} = useContext(ShowContext);
    const {Info,setInfo} = useContext(InfoContext)
    const [Visibile,setVisible] = useState(false);
    const [showSubmit,setshowSubmit] = useState(true)
    const [Localcheck,setLocalcheck] = useState(true);
    const [Amount,setAmount] = useState(Event.amt?Number(Event.amt):0);
    let images_set = data.map((e)=>{
        if (Event && Event.image == e.image){
            return <img src={e.image} alt="No Event Selected" className={styles.img + ' grayscale-0 opacity-[1]'}/>
        }
        else{
            return <img src={e.image} alt="No Event Selected" className={styles.img + ' grayscale-100 opacity-[0.5]'}/>
        }
    })
    const [Images,setImages] = useState(images_set)
    let options = data.map((e,index)=>{
        if (Event && e.title == Event.title){
            return (
                <>
                <label htmlFor={index} className="text-[15px]">{e.title}</label>
                <input id={index} type="checkbox" className='mx-[2px]' value={[e.title,e.amt]} onChange={handleSelection} checked={Localcheck} name='events'></input>
                <br />
                </>
            )
        }
        else{
        return(
            <>
            <label htmlFor={index} className="text-[15px]">{e.title}</label>
            <input id={index} type="checkbox" className='mx-[2px]' value={[e.title,e.amt]} onChange={handleSelection} name='events'></input>
            <br />
            </>
        )}
    })
    
    function handleSelection(e){
        let amt=Number((e.currentTarget.value).split(',')[1]);
        let updatedImages = Images.map((record,index)=>{
            let grayscale = (((record.props.className).split(' ')).slice(1))[0]; //Handles The class name string
            if(Event && Event.title == (e.currentTarget.value.split(','))[0]){
                setLocalcheck(!Localcheck)
            }
            if(index == e.currentTarget.id && grayscale == 'grayscale-100'){
                // Checks if the current event is unchecked, if true checks it and updates the amount value. 
                setAmount((Amount)=>Amount+amt)
                return <img src={record.props.src} alt="No Event Selected" className={styles.img + ' grayscale-0 opacity-[1]'}/>
            }
            if(index == e.currentTarget.id && grayscale == 'grayscale-0'){
                // Checks if the current event is checked, if true unchecks it and updates the amount value.
                setAmount((Amount)=>Amount-amt)
                return <img src={record.props.src} alt="No Event Selected" className={styles.img + ' grayscale-100 opacity-[0.5]'}/>
            }
            else if(grayscale == 'grayscale-0'){
                // Checks if the checked events have grayscale of 0, if true changes persist.
                return <img src={record.props.src} alt="No Event Selected" className={styles.img + ' grayscale-0 opacity-[1]'}/>
            }
            else{
                return <img src={record.props.src} alt="No Event Selected" className={styles.img + ' grayscale-100 opacity-[0.5]'}/>
            }
        })
        setImages(updatedImages)

    }

    function goBack(){
        setshowRegister(false)
    }

    async function handleFormSubmission(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const events = formData.getAll('events');
        if (events.length === 0) {
            setInfo({message: "Please select at least one event to proceed.", show: true});
            return;
        }

        if(navigator.onLine){
            setshowSubmit(false);
            const res = await fetch('api/register',{
                method:'POST',
                body:formData
            })
            let msg = await res.json();
            setInfo({message:msg.message,show:true})
            if(res.status == 200){
                setshowRegister(false)
            }
            if(res.status > 0){
                setshowSubmit(true)
            }
        }
        else{
            setInfo({message:"No Internet Connection",show:true})
        }
    }

    return(
        <form className={styles.form} method="POST" onSubmit={handleFormSubmission}>
            { Info.show && <SystemPopup message={Info.message}/> }
            <div className={styles.div1}>
                <Field For="College Name" name='cname'/>
                <div className={styles.div2}>
                    <div>
                        <label htmlFor="events">Select Event:</label><br />
                        <div className="w-[200px] h-[90%] overflow-y-scroll">
                            {options}
                        </div>
                    </div>
                    <div className={styles.image_div} style={{'--len':Math.ceil(Math.log2(data.length))}}>
                            {Images}
                    </div>
                </div>
                <Field For="Your Name" name='name'/>
            </div>
            <br />
            <div className={styles.div3}>
                <Field For="Current Year" name='year'/>
                <Field For="Course" name='course'/>
                <Field For="Email" name='email'/>
                <Field For="Contact Number" name='phone'/>
            </div>
            <div className="flex gap-[100px]">
            <div className={styles.div4}>
                <label htmlFor="MOP">Mode of Payement</label>
                <span className="text-[20px]">&#8377;{Amount}</span>
                <input type="text" hidden value={Amount} name='amount'></input>
                <label htmlFor="online">Online</label>
                <input type="radio" name="mode" id="online" value="online" onChange={()=>setVisible(true)} required/>
                <label htmlFor="offline">Offline</label>
                <input type="radio" name="mode" id="offline" value="offline" onChange={()=>setVisible(false)} required/>  
            </div>
            {Visibile &&
             <div>
                 <img src="Characters/Igris.jpg" className="w-[120px] h-[120px] inline mt-1 mr-[10px]"></img>
                 <label htmlFor="screenShot" className="text-yellow-200">{'>Share Payment ScreenShot Here<'}</label>
                 <br />
                 <input id="screenShot" type="file" className="opacity-0" accept="image/*" name='screenshot' required></input>
             </div>
            }
            </div>
            <div className="flex gap-[50px] m-0">
            <Button onSmash={goBack}>Back</Button>
            {showSubmit && <Button>Submit</Button>}
            </div>
        </form>
    )
}