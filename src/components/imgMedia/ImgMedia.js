import './ImgMedia.css'


const ImgMedia = ({newEvent}) => {
 
  return (
   <div className='img-container'>
      <img src={`${newEvent.media[0].url}`} alt="images" />
   </div>
  )
}

export default ImgMedia