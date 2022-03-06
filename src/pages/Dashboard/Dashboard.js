import { useEventsContext } from '../../context/EventsContext';
import './Dashboard.css';
import Row from '../../components/row/Row';
import Details from '../../components/details/Details';

function Dashboard() {
  const {events} = useEventsContext()
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