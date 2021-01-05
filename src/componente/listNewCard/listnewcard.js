import Cardtwo from '../cardtwo/cardtwo';
import './listnewcard.css';
import im1 from '../../assets/images/im1.jpg';
import im2 from '../../assets/images/im2.jpg';
import im3 from '../../assets/images/im3.jpg';
import im4 from '../../assets/images/im4.jpg';
import im5 from '../../assets/images/im5.jpg';
import im6 from '../../assets/images/im6.jpg';
import im7 from '../../assets/images/im7.jpg';
import im8 from '../../assets/images/im8.jpg';
const cards = [
    {
        price:20,
        title: 'this is the 20',
        img:im1,

    },
    {
        price:25,
        title: 'this is the 25',
        img:im2,
    },
    {
        price:28,
        title: 'this is the 28',
        img:im3,
    },
    {
        price:35,
        title: 'this is the 35',
        img:im4,
    },
    {
        price:22,
        title: 'this is the 22',
        img:im5,
    },
    {
        price:22,
        title: 'this is the 22',
        img:im6,
    },
    {
        price:22,
        title: 'this is the 22',
        img:im7,
    },
    {
        price:22,
        title: 'this is the 22',
        img:im8,
    },
]
const Listnewcard = ()=>{
    
    return(<div className={'listCard'}>
        {cards.map((card)=>
        <Cardtwo
            title={card.title}
            price={card.price}
            img={card.img}
        />

        )}
    </div>)
}

export default Listnewcard; 