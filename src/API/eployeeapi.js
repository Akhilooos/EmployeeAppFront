import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com/users';

const getData = async()=>{
    try{
        const response = await axios.get(baseUrl);
        const data = response.data;
        return data;
    }
    catch(error){
        console.log(error);
    }
}
export { getData };