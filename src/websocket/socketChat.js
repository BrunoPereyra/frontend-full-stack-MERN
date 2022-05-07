import { io } from "socket.io-client";
const socket = io("http://localhost:3001")

function socketChatMsj(msjUser) {
    socket.emit("client:newmsj", {
        msjUser,
        chatName: "All"
    })
}

function socketChatShowMgs() {
    socket.emit("client:showChat",{})
}


export default { socketChatMsj, socketChatShowMgs, socket}