import axios from "axios"

const bestPracticesAPIController = async () => {
     axios.get().then((data) => {
        return data.data
    })

} 

export default bestPracticesAPIController