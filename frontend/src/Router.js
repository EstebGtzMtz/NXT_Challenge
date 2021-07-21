import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup/LoginSignup';
import Dashboard from './Pages/Dashboard/Dashboard';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route component={() => (<h1>login</h1>)} path='/' exact />
                <Route component={LoginSignup} path='/loginSignup' exact />
                <Route component={Dashboard} path='/dashboard' exact />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;