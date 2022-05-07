import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from "react-router-dom"
import Header from './Header'
import Post_service from "../services/Post_service"
import PersonIcon from '@material-ui/icons/Person';
import BrightnessLowIcon from '@material-ui/icons/BrightnessLow';
import "../static/styles/Profile.css"

function Profile() {
    const history = useHistory()
    var aaa
    const getProfile = async () => {
        let loggedUser = window.localStorage.getItem("loggedAppUser")
        if (loggedUser) {
            const userStorage = await JSON.parse(loggedUser)
            Post_service.setToken(userStorage.token)
        } else {
            history.push("/login")
        }
        const profileUser = await Post_service.profile()
        aaa = await profileUser
        console.log(aaa)
    }

    useEffect( async () => {
        getProfile()
    }, [])

    return (
        <div id="profile" >
            <Header />
            <div id="profile_user">
                <div id="profile_data">
                    <div id="img_User">
                        <PersonIcon id="profile_picture" />
                    </div>
                    <div id="data">
                        <div id="data_user">
                            {/* <span id="name_user">{DataUser.nameUser}</span> */}
                            <span className="edit_profile">Edit profile</span>
                            <BrightnessLowIcon />
                        </div>
                        <div id="account_numbers">
                            <span>{aaa.posts.length}    </span>
                            {/* <span>{Profile.followers.length}</span> */}
                            {/* <span>{Profile.following.length}</span>  */}
                        </div>
                        <div id="user_biography">
                            <span>oizsdjfoihoufvghsñodhoih</span>
                            <span>oizsdjfoihoufvghsñodhoih</span>
                            <span>oizsdjfoihoufvghsñodhoih</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
