import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import "../static/styles/Post.css"
import PersonIcon from '@material-ui/icons/Person';
import Post_service from "../services/Post_service"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import { Divider } from '@material-ui/core';

export default function Post() {
    const history = useHistory()
    const [PostsUsers, setPostsUsers] = useState([])

    async function getPost() {
        var loggedUser = window.localStorage.getItem("loggedAppUser")
        if (loggedUser) {
            var userStorage = await JSON.parse(loggedUser)
            Post_service.setToken(userStorage.token)
        } else {
            history.push("/login")
        }
    }

    useEffect(() => {
        getPost()
    }, [])

    return (
        <div>
            {
                PostsUsers.map(p => (
                    p.id ?
                        <div id="post" key={p.id}>
                            <div id="post_header">
                                <PersonIcon className="PersonIcon" />
                                <h2 id="post_name">{p.user.nameUser}</h2>
                            </div>
                            <img width="100" id="post_imagen" src={p.imgUrl} />
                            <div id="bordericon_id">
                                <div>
                                </div>
                                <FavoriteBorderIcon className="bordericon" />
                                <BookmarkBorderIcon className="bordericon" />
                                <ChatBubbleOutlineIcon className="bordericon" />
                            </div>
                            <div>
                                <h4 id="post_text">{p.user.nameUser}<strong id="post_caption">{p.caption}</strong></h4>
                            </div>

                        </div>
                        :
                        null

                )

                )
            }

        </div>
    )
}
