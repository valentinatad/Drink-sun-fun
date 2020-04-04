import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { postRegisterComponent } from "../services/Service";
export const Register = () => {

    const history = useHistory();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [alert, setAlert] = useState('');

    const handleRegister = (e) => {

        e.preventDefault();
        if (name === "" || surname === "" || username === "" || password === "" || confirm === "") { setAlert("All fields are required."); return }
        // if (email !== `/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i`; return }
        if (password !== confirm) { setAlert("The Confirm Password does not match."); return }

        postRegisterComponent(name, surname, username, password, email).then(response =>
            console.log(response)).catch(error => {
                setAlert("Choose diferent ussername or e-mail.");
                return
            });
        history.push('/')
        return
    }


    return (<div className="register">
        <p className="alert1">{alert}</p>
        <input type="text" placeholder="Name" onInput={(e) => { setName(e.target.value) }} />
        <input type="text" placeholder="Surname" onInput={(e) => { setSurname(e.target.value) }} />
        <input type="email" placeholder="E-mail" onInput={(e) => { setEmail(e.target.value) }} />
        <input type="text" placeholder="Username" onInput={(e) => { setUsername(e.target.value) }} />
        <input type="password" placeholder="Password" onInput={(e) => { setPassword(e.target.value) }} />
        <input type="password" placeholder="Confirm password" onInput={(e) => { setConfirm(e.target.value) }} />
        <button onClick={(e) => { handleRegister(e) }} className="registerButton">Register</button>
        <button onClick={()=>history.push('/')} className="registerButton">LogIn</button>
    </div>
    )
}