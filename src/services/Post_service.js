import axios from 'axios'
const baseUrl = 'http://localhost:3001'
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const createUser = async (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  await axios.post(`${baseUrl}/signup`, newObject, config)
}

const getAllPost = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const { data } = await axios.get(`${baseUrl}/getPost`, config)
  return data
}

const create = (newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.post(`${baseUrl}/post`, newObject, config)
  request.then(response => response.data)
}

const profile = async () => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = await axios.get(`${baseUrl}/Profile`, config)
  return request.data.User
}

const ChatWS = async (object) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = await axios.post("", object, config)
  return request.data
}
const searchEngine = async (object) => {
  const config = {
    handler: {
      Authorization: token
    }
  }
  const request = await axios.post(`${baseUrl}/userSearch`, object, config)
  return request.data
}
export default { getAllPost, create, setToken, createUser, profile, ChatWS, searchEngine }