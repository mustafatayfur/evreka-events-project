import { useEventsContext } from '../../context/EventsContext';
import './Dashboard.css';
import Row from '../../components/row';
import Details from '../../components/details/index';

function Dashboard() {
  const {events, newNumber} = useEventsContext()
  console.log(events)
  return (
    <div className="dashboard">
      <div className='dashboard-table'>
      <h2>EVENTS</h2>
      {events.map((event,index)=> 
          <Row key={index} event={event}/>
      )}
      </div>
      <Details/>
    </div>
  );
}

export default Dashboard;