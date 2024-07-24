import axios from "axios"

const bestPracticesAPIController = async () => {
    let response = await axios.get("/best-practices")
    return response.data
    

} 

export default bestPracticesAPIController