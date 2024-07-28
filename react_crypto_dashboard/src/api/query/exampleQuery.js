import Axios from "../axios"
export const fetchExample = async () =>{
    try {
        const {data} = Axios.get("/")
        console.log("Data is ",data);
        return data;
    } catch (error) {
        // console.error(error);
        throw Error(error.response.data.message)
    }
}