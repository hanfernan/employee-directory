import axios from "axios";

const BASEURL = "https://randomuser.me/api/"

export default {
    getEmployees: function (){
        return axios.get(BASEURL + "?results=100&nat=us");
    },
};