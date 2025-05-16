export function Timebox({time,children}){
    return (
        <div className="w-[100px] h-[100px] flex flex-col items-center pb-2">
            <span className="block text-[32px] mt-[10px] mb-[-10px]">{time}</span>
            <span className="text-[15px]">{children}</span>
        </div>
    )
}

export default function Clock(){
    return (
        <div className="w-[400px] flex flex-row justify-between mt-[30px]">
            <Timebox time={12}>Days</Timebox>
            :
            <Timebox time={6}>Hours</Timebox>
            :
            <Timebox time={3}>Minutes</Timebox>
            :
            <Timebox time={45}>Seconds</Timebox>
        </div>
    )
}