import axios from "axios";

const instance = axios.create({
    baseURL: 'http://your/api' // THE API (cloud function) URL
});

export default instance;