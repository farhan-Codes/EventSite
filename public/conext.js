import { Children, createContext, useState } from "react";
import Home from "@/pages";
import { Tab } from "@/components/Tabs";

export const ShowContext = createContext(false)
export const EventContext = createContext(undefined)

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

