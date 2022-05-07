import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import Post_service from "../services/Post_service";
import "../static/styles/Post.css"

export default function Post_rise() {
    const history = useHistory()
    
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

    const [Inputs, setInputs] = useState({
        imgUrl: "",
        caption: ""
    })

    const HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            Post_service.create(Inputs)
                setInputs({
                    imgUrl: "",
                    caption: ""
                })
                
                history.push("/home")
            
        } catch (error) {
            console.log(error);
        }
    }

    const HandleChange = (e) => {
        setInputs({
            ...Inputs,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <div className="post_rise" id="IdButton">
                <form onSubmit={HandleSubmit}>
                    <input
                        onChange={HandleChange}
                        type="text"
                        name="imgUrl"
                        placeholder="imgUrl"
                        value={Inputs.imgUrl}
                    />
                    <input
                        onChange={HandleChange}
                        type="text"
                        name="caption"
                        value={Inputs.caption}
                        placeholder="caption"
                    />
                    <button>
                        post
                    </button>
                </form>
            </div>
        </div>
    )
}
