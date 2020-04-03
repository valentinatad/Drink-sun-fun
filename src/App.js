
import React from 'react';
import './App.css';
import { Login } from './components/public/Login';
import { BrowserRouter, Link, Switch, Redirect } from 'react-router-dom';
import { Home } from './components/private/Home';
import { AllDrinks } from "./components/private/AllDrinks"
import { Logout } from './components/private/Logout';
import { Recipes } from './components/private/Recipes';
import PrivateRoute from './components/private/PrivateRoutes';
import { PublicRoute } from './components/public/PublicRoute';

const App = () => {

  return (<>
    <p className="drinksFun">Drinks, sun & fun</p>
    <BrowserRouter>
      <div className="links">
        <Link to='/home' className="link">Home</Link>
        <Link to="/allDrinks" className='link'>All drinks</Link>
        <Link to="/recipes" className="link">Recipes</Link>
        <Link to="/logout" className="link">Logout</Link>
      </div>
      <Switch>



        <PrivateRoute component={Home} path="/home" />
        <PrivateRoute component={AllDrinks} path="/allDrinks" />
        <PrivateRoute component={Logout} path="/logout" />
        <PrivateRoute component={Recipes} path="/recipes" />
        <PublicRoute component={Login} path="/login" />
        <Redirect from='/' to="/login" />
      </Switch>
    </BrowserRouter>

  </>
  )
}


export default App;
