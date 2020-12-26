import './navbar.css';
import {Link} from "react-router-dom";
import car from '../../assets/images/truck.svg';
import phone from '../../assets/images/tel.png'

const Navbar =()=>{
    return(
        <div className={'nav-c'} >
            <div className={'nav-SubC'} >
                <div className={'nav-left'} >
                    <img src={phone} className={'imgTel'} />
                   <span> Appelez-nous au : 01 30 95 56 10.</span>
                   <img src={car} className={'imgCar'} />
                   <span>Livraison offerte dès 59€ *.</span> 
                </div>
                <div className={'nav-right'} >
                    <div className={'nBlog'} >
                        <Link to="/">Blog</Link>
                    </div>
                    <div className={'nContact'} >
                        <Link to="/">Contactez-nous</Link>    
                    </div>
                    <div className={'nConnect'} >
                        <Link to="/login">Connexion</Link>
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar;