export function Button({children,onSmash}){
    return (
    <button className="w-[200px] h-[40px] mt-[20px]" onClick={onSmash}>
        {children}
    </button>
    )
}

export function Field({For,className,value=""}){
    return(
            <input type="text" placeholder={For} name={For} className={className} value={value}/>
    )
}