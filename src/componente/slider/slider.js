import ImageGallery from 'react-image-gallery';
import './slider.css';
import img1 from '../../assets/images/1.jpg';

const images = [
    {
      original: img1,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
const Slider = ()=>{
  
    return(
        <div className={'containSlider'}>
            <div className={'cSliderSub'}>
            <ImageGallery items={images} 
            showBullets={true}
            showThumbnails={false}
            />
            </div>
        </div>
    )
}

export default Slider