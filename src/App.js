import './App.css';
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Principal from "./screens/principal/principal";
import NotFound from "./screens/error/error"
import AddItem from "./screens/addItem/addItem"
function App() {
    return (
        <Router>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/principal"/>
                    </Route>
                    <Route path="/principal">
                        <Principal/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="/AddItem">
                        <AddItem/>
                    </Route>
                    <Route component={NotFound} />
                </Switch>
            
        </Router>
    );
}
export default App;