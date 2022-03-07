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
    const [newNumber, setNewNumber] = useState(0)
    const [comment, setComment] = useState('');

    console.log(newEvent.actions[1])
    // const [visible, setVisible] = useState(false);

    function createData(action, title) {
        return { action, title};
    }
    const rows = [
        createData('Mark this event as resolved and enter the details of the resolution.', 'Mark As Resolved'),
        createData('Change the asset with another one.', 'Change Asset'),
        // example_response.action_descriptions[0],
        // example_response.action_descriptions[1],
        // example_response.action_descriptions[2],
        // example_response.action_descriptions[3],
    ];

    return <EventsContext.Provider 
        value=
        {{
            events, 
            setEvents, 
            newEvent, 
            setNewEvent,
            newNumber,
            setNewNumber,
            comment,
            setComment,
            rows     
        }}>
            {children}
        </EventsContext.Provider>
}
export default EventsContextProvider