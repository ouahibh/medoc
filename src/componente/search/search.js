import { useState } from 'react';
import './search.css';
import {Link} from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import loupe from '../../assets/images/searchloupe.svg';
import panier from '../../assets/images/panier.svg';
import fleche from '../../assets/images/left-arrow.svg';


const Search= ()=>{
    const [degree, setDegree] = useState('rotate(-90deg)');
    const changeRotate =()=>{
        if (degree==='rotate(-90deg)'){
            setDegree('rotate(90deg)')
        }else{
            setDegree('rotate(-90deg)')
        }
    } 
    const reset = ()=>{
        setDegree('rotate(-90deg)')
    }
    return(
        <div className={'search'} >
            <div className={'lien'} >
                <Link to="/">
                <img alt={'Image'} src={logo}/>
                </Link>
            </div>
            <div className={'search-R'}>
                <input placeholder={'Recherche'} type={'search'} />
                <div className={'loupe'}>
                    <img alt={'Image'} src={loupe}/>
                </div>
            </div>
            <div className={'panier-S'} >
                <div className={'panier-sLeft'}>
                    <img alt={'Image'} src={panier}/>
                    <span>Panier<small>(vide)</small></span>
                </div>
                <div className={'panier-sRight'}>
                    <img alt={'Image'}
                    style={{transform:degree}}
                    onMouseOver={changeRotate}
                    onMouseLeave={reset}
                    src={fleche}/>
                </div>
            </div>
        </div>
    )
};

export default Search;