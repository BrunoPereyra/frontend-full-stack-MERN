import React, { useState, useEffect } from 'react'
import instagram from "../static/png/Instagram-Logotipo-2016-Presente.png"
import "../static/styles/Home.css"
import SendIcon from '@material-ui/icons/Send';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Link } from 'react-router-dom'
import Post_service from "../services/Post_service"
import {useHistory} from "react-router-dom"


export default function Header({token}) {
    const history = useHistory() 
    const [search, setSearchInput] = useState("")

    async function headerSearch() {
        var loggedUser = window.localStorage.getItem("loggedAppUser")
        if (loggedUser) {
            var userStorage = await JSON.parse(loggedUser)
            Post_service.setToken(userStorage.token)
        } else {
            history.push("/login")
        }
    }

    useEffect(() => {
        headerSearch()
    }, [])

    
    async function HandleSubmit(e) {
        e.preventDeFault()
        const a = await Post_service.searchEngine(search)
        console.log(a);
        setSearchInput("")
    }
    function HandleChange(e) {
        setSearchInput(e.target.value)
    }

    return (
        <header id="header_home">
            <img id="header_instagram" width="110" src={instagram} />
            <form onSubmit={HandleSubmit}>
                <input
                    id="input_header"
                    type="text"
                    placeholder="search"
                    value={search}
                    onChange={HandleChange}
                />
            </form>
            <div>
                <Link className="a_posts" to="/posts/rise"  >
                    <SendIcon />
                </Link>
                <Link className="a_posts" to="/home">
                    <HomeIcon />
                </Link>
                <Link className="a_posts" to="/profile">
                    <PersonIcon />
                </Link>
                <Link className="a_posts" to="/home">
                    <FavoriteBorderIcon />
                </Link>
                <Link className="a_posts" to="/messages">
                    <SendIcon />
                </Link>
            </div>
        </header>
    )
}
