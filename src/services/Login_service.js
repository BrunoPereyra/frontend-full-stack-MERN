import axios from "axios"
const Login_axios = async (credentials) => {
    const { name, password, nameUser } = credentials
    const url = "http://localhost:3001/login"
    const { data } = await axios.post(url, { name, password, nameUser })
        
    return data
}
export default Login_axios