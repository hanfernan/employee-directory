import axios from "axios";

//limit to 100 users
export default {
    getEmployees: function (){
        return axios.get("https://randomuser.me/api/?results=100&nat=us");
    },
};