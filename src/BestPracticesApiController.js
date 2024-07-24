import axios from "axios"

const bestPracticesAPIController = () => {
    let response = axios.get("/best-practices")
    
    return response
} 

export default bestPracticesAPIController