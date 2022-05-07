import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import "../static/styles/Login.css"
import Login_axios from '../services/Login_service'
import Post_service from "../services/Post_service"

export default function Login_form() {
    const history = useHistory()
    const [LoggerUserToken, setLoggerUserToken] = useState([])
    const [LoginInput, setLoginInput] = useState({
        nameUser: "",
        password: "",
        name: ""
    })

    const ButtonColorif = (
        LoginInput.password.length >= 6 && LoginInput.nameUser.length >= 6 && LoginInput.name.length >= 5
            ? "start_section_button_actived" : "start_section_button"
    )
    useEffect(() => {
        const loggedUser = window.localStorage.getItem("loggedAppUser")
        if (loggedUser) {
            const userStorage = JSON.parse(loggedUser)
            setLoggerUserToken(userStorage)
            Post_service.setToken(LoggerUserToken.token)
            history.push("/home")
        }
    }, [])

    const Handlesubmit = async (e) => {
        e.preventDefault()
        if (
            LoginInput.password.length >= 6 && LoginInput.nameUser.length >= 6 && LoginInput.name.length >= 5
        )
            try {
                const user = await Login_axios(LoginInput)

                window.localStorage.setItem(
                    "loggedAppUser", JSON.stringify(user)
                )
                Post_service.setToken(user.token)
                setLoggerUserToken(user)
                setLoginInput({
                    nameUser: "",
                    password: "",
                    name: ""
                })
                history.push("/home")
            } catch (err) {
                console.log(err)
            }
    }

    const Handlechange = (e) => {
        setLoginInput({
            ...LoginInput,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div id="login_form_contenedor">
            <form onSubmit={Handlesubmit} id="login_form">
                <input
                    value={LoginInput.nameUser}
                    onChange={Handlechange}
                    name="nameUser"
                    className="inputs_login"
                    type="text"
                    maxLength="80"
                    placeholder="nameUser"
                />
                <input
                    value={LoginInput.password}
                    onChange={Handlechange}
                    className="inputs_login"
                    type="password"
                    autoComplete="on"
                    maxLength="80"
                    name="password"
                    placeholder="Password"
                />
                <input
                    value={LoginInput.name}
                    onChange={Handlechange}
                    className="inputs_login"
                    type="name"
                    autoComplete="on"
                    maxLength="80"
                    name="name"
                    placeholder="name"
                />
                <button id="button_login" className={ButtonColorif}>
                    <p id="start_section">
                        Start section
                    </p>
                </button>
            </form>
        </div>
    )
}