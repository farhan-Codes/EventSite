import { Children, createContext, useState } from "react";


export const ShowContext = createContext(false)
export const EventContext = createContext(undefined)
export const InfoContext = createContext({messsage:'',show:false})

export function ShowContextProvider({children}){
    const [showRegister,setshowRegister]=useState(false);
    return (
        <ShowContext.Provider value={{showRegister , setshowRegister}}>
            {children}
        </ShowContext.Provider>
    )
}

export function EventContextProvider({children}){
    const [Event,setEvent] = useState(false);
    return (
        <EventContext.Provider value={{Event,setEvent}}>
            {children}
        </EventContext.Provider>
    )
}

export function InfoContextProvider({children}){
    const [Info,setInfo] = useState({messsage:'',show:false})
    return(
        <InfoContext.Provider value={{Info,setInfo}}>
            {children}
        </InfoContext.Provider>
    )
}

