import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import "../static/styles/Default.css"

export default function Default() {
    return (
        <div>
            <Header />
            <div id="default">
                <h2>Esta pagina no esta disponible</h2>
                <p>Es posible que el enlace que seleccionaste esté roto o que se haya eliminado la página.</p>
                <Link id="link_default" to="home">volver a pagina principal</Link>
            </div>
        </div>
    )
}
