import axios from 'axios';
const instance = axios.create({
    baseURL: "https://tinder-clone-lite.herokuapp.com"
})

export default instance;