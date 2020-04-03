import React from 'react';
import './logout.css'
import { useHistory } from 'react-router-dom';
import { logOut } from '../services/auth';

export const Logout = () => {
    const history = useHistory();
    return (<div className="logOut">
        <p className="thankYou">Thank You!</p>
        <button onClick={() => { logOut(); history.push('/') }} className="logoutBtn">Logout</button>
    </div>
    )
}