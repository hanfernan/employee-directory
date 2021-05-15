import axios from "axios";

const BASEURL = "https://randomuser.me/api/"

export default {
    getEmployees: function (){
        return axios.get(BASEURL + "?results=100");
    },

    //filter
    getEmployeeByName: function (name){
        return axios.get(BASEURL + "?name=" + name);
    },

    //sort
    // sortEmployees: function (){
    //     return axios.get(BASEURL + "?results=100");
    // }
};