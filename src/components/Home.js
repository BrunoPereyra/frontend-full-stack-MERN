import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom"
import "../static/styles/Home.css"
import Header from './Header'
import Post from './Post'
import Post_service from '../services/Post_service'

export default function Home() {
    const history = useHistory()
    const [loggedToken, setloggedToken] = useState("")

    const home = async () => {
        var loggedUser = window.localStorage.getItem("loggedAppUser")
        if (loggedUser) {
            var userStorage = await JSON.parse(loggedUser)
            Post_service.setToken(userStorage.token)
        } else {
            history.push("/login")
        }
    }

    useEffect(() => {
        home()
    }, [])
    return (
        <div id="home">
            <Header />
            <Post />
        </div>
    )
}

