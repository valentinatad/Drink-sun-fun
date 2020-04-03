import React, { useState } from 'react'
import { BrowserRouter, Link, Switch, Route, useHistory } from 'react-router-dom';
import { Register } from './Register';
import { setToken } from "../services/auth";
import './login.css'
import { postUser } from '../services/Service';



export const Login = () => {
    const history = useHistory();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleClick = () => {
         
        postUser(username, password).then(res => {
            console.log(res.data.token);
            if (res.data.token) {
                setToken(res.data.token);
                history.push("home"); 
            }
        })
            .catch(error => {
                alert("Invalid username or password.");

            });
    };

    return (<><div className="login">

        <button className="button1" onClick={(e) => { handleClick(e); history.push('/home') }}>LogIn</button>
        <input type="password" placeholder="Password" onInput={(e) => setPassword(e.target.value)} className="input"/>
        <input type="username" placeholder="Username" onInput={(e) => setUserName(e.target.value)} className="input"/>
    </div>


        <BrowserRouter>
            <div className="register1">
                <Link to="/register" className="linkRegister">
                    Register
        </Link></div>

            <Switch>
                <Route path="/register">
                    <Register></Register>
                </Route>
            </Switch>
        </BrowserRouter>
    </>
    )
}
