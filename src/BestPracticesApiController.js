import axios from "axios"

const bestPracticesAPIController = async () => {
     axios.get("/best-practices").then((data) => {
        return data.data
    })

} 

export default bestPracticesAPIController