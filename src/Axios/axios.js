import axios from "axios"
const instance = axios.create({
     baseURL:"https://voosh-backend-yr6v.onrender.com/api"
    
})
export default instance