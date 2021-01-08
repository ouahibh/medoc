import ImageGallery from 'react-image-gallery';
import './slider.css';
import img1 from '../../assets/images/1.jpg';
import img2 from '../../assets/images/2.jpg';
import img3 from '../../assets/images/3.jpg';
import img4 from '../../assets/images/4.png';
import img5 from '../../assets/images/5.jpg';
import img6 from '../../assets/images/6.jpg';
const images = [
    {
      original: img1,
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: img2,
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: img3,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: img4,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: img5,
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
      original: img6,
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
            showFullscreenButton={false}
            showPlayButton={false}
            />
            </div>
        </div>
    )
}

export default Slider