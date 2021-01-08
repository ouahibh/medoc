import './principal.css';
import Navbar from "../../componente/navbar/navbar";
import Search from "../../componente/search/search";
import Slider from '../../componente/slider/slider';
import SubNav from '../../componente/subNav/subNav';
import Listnewcard from '../../componente/listNewCard/listnewcard';
import Navbar2 from '../../componente/navbar2/navbar2';


const Principal =()=>{
    return (
        <div className={'principal-all'} >
            <Navbar/>
            <Search/>
            <Navbar2/>
            <Slider/>
            <SubNav/>
            <Listnewcard/>
        </div>
    )
}

export default Principal;