import { createContext, useContext, useEffect, useState } from "react";
import example_response from'../store/initialState'
import initialEvent from "../store/initialEvent";

export const EventsContext = createContext()

export function useEventsContext() {
    return useContext(EventsContext)
}

const EventsContextProvider = ({children}) => {
    const {data} = example_response
    const [events, setEvents] = useState(data)
    const [newEvent,setNewEvent] = useState(initialEvent)
    // const [visible, setVisible] = useState(false);
    console.log(newEvent)

    return <EventsContext.Provider 
        value=
        {{
            events, 
            setEvents, 
            newEvent, 
            setNewEvent,     
        }}>
            {children}
        </EventsContext.Provider>
}
export default EventsContextProvider