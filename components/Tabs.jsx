import { data } from "@/public/Data"
console.log(data)

export function Tab({image,children}){
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
        <div style={styles}>
            <span className="bg-black">{children}</span>
        </div>
    )
}


export default function Wrapper(){
    let content = data.map((currentData)=>{
        return <Tab key={currentData.id} image={currentData.image}>{currentData.title}</Tab>
    })
    return (
        <div className="flex gap-5 my-10">
            {content}
        </div>
    )
}