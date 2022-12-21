import {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import firstImg from '../images/david-martin-6NpYOFB3VCI-unsplash.jpg'
import secImg from '../images/jordan-whitfield-BhfE1IgcsA8-unsplash.jpg'
import thirdImg from '../images/julio-rionaldo-xIoze9dH4WI-unsplash.jpg'

const Carousel = () =>{
    const [currImage,setCurrImage] =useState(0);
    const images = [firstImg,secImg,thirdImg]

    const prevImage = () =>{
        setCurrImage(currImage ===0 ? 2:(prev)=> prev -1)
    }

    const nextImage =()=>{
        setCurrImage(currImage ===2?0:(prev)=>prev+1)
    }

    return(
        <div className="carousel">
            <div className="images-container" style={{transform:`translateX(-${currImage *100}vw)`}}>
                <img className="carousel-img1" src={images[0]} alt=""/>
                <img className="carousel-img2" src ={images[1]} alt =""/>
                <img className ="carousel-img3" src = {images[2]} alt =""/>
            </div>
            <div className="next-image">
                <div className="carousel-icon1" onClick={prevImage}><ArrowBackIcon/></div>
                <div className ="carousel-icon2" onClick={nextImage}><ArrowForwardIcon/></div>
            </div>
        </div>
    )
}
export default Carousel