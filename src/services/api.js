import { API_URL } from "@env"
import axios from "axios";

const Api = axios.create({
    baseURL: API_URL    
});

export default Api;