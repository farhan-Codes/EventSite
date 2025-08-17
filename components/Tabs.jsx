import { EventContext, ShowContext } from "@/conext"
import data  from "@/components/Data"
import { useContext } from "react"

export function Tab({image,children,amt,margin}){
    const {setshowRegister} = useContext(ShowContext);
    const {setEvent}= useContext(EventContext);
    const styles = {
        backgroundImage:`url(${image}),linear-gradient(black)`,
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center',
        width:'20%',
        left:`calc(26%*${margin})`,
        marginBottom:'100px',
        height:'98%',
        border:'2px solid white',
        textAlign:'center',
        padding:"100px 0",
        fontSize:'30px',
        borderRadius:'15px',
        backgroundBlendMode:'hard-light',
        textTransform:'upper',
        position:"absolute"
    }
    return (
        <div style={styles} onClick={()=>{
            setEvent({title:`${children}`,image:`${image}`,amt:`${amt}`})
            setshowRegister(true)
        }
    }>
            <span className="bg-black">{children}</span>
        </div>
    )
}


export default function Wrapper(){
    let content = data.map((currentData,index)=>{
        return <Tab key={currentData.id} image={currentData.image} amt={currentData.amt} margin={index}>{currentData.title}</Tab>
    })
    return (
        <div className="wrapper mb-10">
            {content}
        </div>
    )
}