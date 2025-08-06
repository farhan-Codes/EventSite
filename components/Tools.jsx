import { useState } from "react"

export function Button({children,onSmash}){
    return (
    <button className="w-[200px] h-[40px] mt-[20px]" onClick={onSmash}>
        {children}
    </button>
    )
}

export function Field({For,className,name}){
    function handleInput(e){
        setEntry(e.currentTarget.value)
    }

    const [Entry,setEntry] = useState("")
    return(
            <input type="text" placeholder={For} name={name} className={className} value={Entry} onChange={(e)=>handleInput(e)} required/>
    )
}