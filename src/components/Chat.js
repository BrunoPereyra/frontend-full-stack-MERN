import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import Post_service from '../services/Post_service'
import Header from "./Header"
import "../static/styles/Chat.css"
import ChatWS from '../websocket/socketChat'

export function Chat() {
    const history = useHistory()

    const [message, setMessage] = useState("")
    const [nameUserWS, setnameUserWS] = useState("")
    var msj = []
    var userStorage = ""

    const getMessages = async () => {
        const loggedUser = window.localStorage.getItem("loggedAppUser")
        if (loggedUser) {
            userStorage = await JSON.parse(loggedUser)
            Post_service.setToken(userStorage.token)
            setnameUserWS("bruno_dev")
            ChatWS.socketChatShowMgs()
        } else {
            history.push("/login")
        }
    }
    useEffect(() => {
        getMessages()
        ChatWS.socket.on("server:showChat", (Socket) => {
            try {
                msj = Socket.result
                console.log(msj, "que nos esta pasando??");
            } catch (err) {
                console.log(err);
            }
        })
    }, [])


    function HandleSubmit(e) {
        e.preventDefault()
        ChatWS.socketChatMsj(message)
        ChatWS.socketChatShowMgs(nameUserWS)
        setMessage("")
    }
    function HandleChange(e) {
        setMessage(e.target.value)
    }

    return (
        <div id="chat_main">
            <Header />
            <div id="chat">
                <div id="your_messages">

                </div>
                <div id="writing_inChat">
                    <form onSubmit={HandleSubmit}>
                        <input
                            type="text"
                            autoFocus
                            value={message}
                            onChange={HandleChange}
                        />
                        <button id="button_search_msj" />
                    </form>

                    <div id="friends">

                    </div>
                </div>
            </div>
        </div >
    )
}