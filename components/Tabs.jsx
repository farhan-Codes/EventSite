import { EventContext, ShowContext } from "@/public/conext"
import { data } from "@/public/Data"
import { useContext } from "react"

export function Tab({image,children,amt}){
    const {setshowRegister} = useContext(ShowContext);
    const {setEvent}= useContext(EventContext);
    const styles = {
        backgroundImage:`url(${image}),linear-gradient(black)`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'200px',
        height:'200px',
        border:'2px solid white',
        textAlign:'center',
        padding:"100px 0",
        fontSize:'30px',
        borderRadius:'15px',
        backgroundBlendMode:'hard-light',
        textTransform:'upper',
    }
    return (
        <div style={styles} onClick={()=>{
            setEvent([{title:`${children}`,image:`${image}`,amt:`${amt}`}])
            setshowRegister(true)
        }
    }>
            <span className="bg-black">{children}</span>
        </div>
    )
}


export default function Wrapper(){
    let content = data.map((currentData)=>{
        return <Tab key={currentData.id} image={currentData.image} amt={currentData.amt}>{currentData.title}</Tab>
    })
    return (
        <div className="flex gap-5 my-10">
            {content}
        </div>
    )
}