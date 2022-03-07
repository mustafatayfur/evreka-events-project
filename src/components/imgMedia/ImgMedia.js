import './Stepper.css'


const ImgMedia = ({newEvent}) => {
 
  return (
   <div>
   <img src={`${newEvent.media[0].url}`} alt="media" />
   </div>
  )
}

export default ImgMedia