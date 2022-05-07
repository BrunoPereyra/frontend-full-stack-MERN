import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import Post_user from '../services/Post_service';
import "../static/styles/Signup.css"

export default function Form_Registration() {
    const history = useHistory()
    const [Inputs, setInputs] = useState({
        nameUser: "",
        password: "",
        gmail: "",
        name: ""
    })

    const buttonClass = (
        Inputs.nameUser.length > 5 &&
            Inputs.password.length > 8 &&
            Inputs.gmail.length > 10 &&
            Inputs.name.length > 5 ?
            "button_actived" : "button_desactived"
    )
    const HandleSubmit = (e) => {
        e.preventDefault();
        if (Inputs.nameUser.length > 5 &&
            Inputs.password.length > 8 &&
            Inputs.gmail.length > 10 &&
            Inputs.name.length > 5) {
                Post_user.createUser(Inputs)            
            }
            history.push("/home")
        }

    const HandleChange = (e) => {
        setInputs({
            ...Inputs,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <form onSubmit={HandleSubmit} id="form_registration">
                <input
                    value={Inputs.gmail}
                    onChange={HandleChange}
                    type="gmail"
                    placeholder="Correo electronico"
                    id="gmail"
                    className="inputs"
                    name="gmail"
                />
                <input
                    value={Inputs.name}
                    onChange={HandleChange}
                    type="text"
                    placeholder="Nombre completo"
                    id="fullname"
                    className="inputs"
                    name="name"
                />
                <input
                    value={Inputs.nameUser}
                    onChange={HandleChange}
                    type="text"
                    placeholder="Usuario"
                    id="username"
                    className="inputs"
                    name="nameUser"
                />
                <input
                    value={Inputs.password}
                    onChange={HandleChange}
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    className="inputs"
                    name="password"
                />
                <button id={buttonClass}>Registrarte</button>
            </form>
        </div>
    )
}
