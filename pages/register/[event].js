import RegisterForm from "@/components/Registerform";
import { useRouter } from "next/router";
import data from "@/components/Data"

export default ()=>{
    const router = useRouter()
    const event = router.query.event; 
    if(event){
        return <RegisterForm event={event}/>
    }
}