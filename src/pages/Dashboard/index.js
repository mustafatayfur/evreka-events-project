import { useEventsContext } from '../../context/EventsContext';
import Row from '../../components/row';
import Details from '../../components/details/index';
import { Wrapper } from './style';

function Dashboard() {
  const {events} = useEventsContext()
  console.log(events)
  return (
    <Wrapper>
      <div className='dashboard-table'>
      <h2>EVENTS</h2>
      {events.map((event,index)=> 
          <Row key={index} event={event}/>
      )}
      </div>
      <Details/>
    </Wrapper>
  );
}

export default Dashboard;