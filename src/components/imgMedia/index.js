import './style.js'
import { Wrapper } from './style.js'


const ImgMedia = ({newEvent}) => {
 
  return (
   <Wrapper className='img-container'>
      <img src={`${newEvent.media[0].url}`} alt="images" />
   </Wrapper>
  )
}

export default ImgMedia