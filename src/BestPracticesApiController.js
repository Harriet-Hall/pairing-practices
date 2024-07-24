import axios from "axios"

const bestPracticesAPIController = async () => {
    return await axios.get("/best-practices")
} 

export default bestPracticesAPIController