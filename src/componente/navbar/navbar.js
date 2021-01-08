import './navbar.css';
import {Link, useHistory} from "react-router-dom";
import car from '../../assets/images/truck.svg';
import phone from '../../assets/images/tel.png';
import Button from '@material-ui/core/Button';
const Navbar =()=>{
    const history = useHistory();
    const navigate = (path) => {
    history.push(path)
}
    return(
        <div className={'nav-c'} >
            <div className={'nav-SubC'} >
                <div className={'nav-left'} >
                    <img src={phone} className={'imgTel'} />
                   <span> Appelez-nous au : <b>01 30 95 56 10.</b></span>
                   <img src={car} className={'imgCar'} />
                   <span>Livraison offerte <b>dès 59€ *.</b></span> 
                </div>
                <div className={'nav-right'} >
                    <Button onClick={()=>navigate('/addItem')} variant="contained" color="primary">Ajouter</Button>
                    <div className={'nBlog'} >
                        <Link to="/">Blog</Link>
                    </div>
                    <div className={'nContact'} >
                        <Link to="/">Contactez-nous</Link>    
                    </div>
                    <div onClick={()=>navigate('/login')} className={'nConnect'} >
                        Connexion
                        
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar;