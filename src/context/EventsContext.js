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
    const [newNumber, setNewNumber] = useState()
    const [comment, setComment] = useState('');

    console.log(events)
    // const [visible, setVisible] = useState(false);


    useEffect(() => {
		localStorage.setItem('localData', JSON.stringify(data));
        
	}, []);
    useEffect(() => {
		
        const newData = JSON.parse(localStorage.getItem('localData'))
        setEvents(newData)
	}, []);

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