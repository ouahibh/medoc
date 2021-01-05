import './register.css'
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
const Register= ()=>{
    return(
        <div className={'container-reg'}>
            <div className={'card-reg'}>
                <div className={'title-reg'}>
                    <span className={'title-text-reg'}>Register</span>
                </div>
                <div className={'inputs-reg'}>
                    <input placeholder={'Nom'} />
                    <input placeholder={'Prénom'} />
                    <input placeholder={'Login'}/>
                    <input type={'password'} placeholder={'Password'}/>
                    <input type={'password'} placeholder={'Confirm Password'}/>
                </div>
                <div className={'actions-reg'}>
                    <div className={'auth-reg'}>
                        <span>S'inscrire</span>
                    </div>
                    <div className={'register-reg'}>
                        <Link to="/login">Se connecter</Link>
                        

                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Register;