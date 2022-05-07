import React from 'react'
import "../static/styles/Signup.css"
import instagram from "../static/png/Instagram-Logotipo-2016-Presente.png"
import Form_Registration from './Form_Registration'

export default function Registration_Presentation() {
    return (
        <div id="form_presentation">
           <img id="img_instagram" height="110" src={instagram}/>
           <h2 id="h2_registration">Regístrate para ver fotos y videos de tus amigos.</h2>
           <Form_Registration />
           <p id="terms_use">Al registrarte, aceptas nuestras Condiciones, la Política de datos y la Política de cookies.</p>
        </div>
    )
}
