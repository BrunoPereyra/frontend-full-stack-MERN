import React from 'react'
import "../static/styles/Login.css"
import instagram from "../static/png/Instagram-Logotipo-2016-Presente.png"
import GooglePlay from "../static/png/3cd8a27083c0.png"
import AppStore from "../static/png/e2247c4f90de.png"
import Login_form from './Login_form'
import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div id="login">
            <div id="login_contenedor">
                <img id="img_login" width="200" src={instagram} />
                <div id="login_form">
                    <Login_form />
                </div>
                <div id="start_with_facebbok">
                    <span>
                        Start section with facebbok
                    </span>
                </div>
                    <p id="forget_password">Did you forget your password ?</p>
            </div>
            <div id="login_registrate">
                <div id="login_content">
                <p id="text_registrate">do you not have account?</p>
                <Link to="signup" id="signup_link"><span>sign up</span></Link>
                </div>
            </div>
            <div id="footer_login">
                <p>Descargar app</p>
                 <div>
                  <img className="app_download" id="AppStore" width="150" src={AppStore}/>
                  <img className="app_download" id="googleplay" width="150" src={GooglePlay}/>
                 </div>
            </div>
        </div>
    )
}
