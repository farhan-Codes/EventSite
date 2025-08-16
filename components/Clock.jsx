export function Timebox({time,children}){
    return (
        <div className="sm:w-[100px] sm:h-[100px] flex flex-col items-center sm:pb-2 w-[100px] h-[80px]">
            <span className="block">{time}</span>
            <span className="text-[15px]">{children}</span>
        </div>
    )
}

export default function Clock(){
    return (
        <div className="sm:w-[400px] flex flex-row justify-between sm:mt-[30px] w-[300px] sm:text-[32px] text-[20px]">
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