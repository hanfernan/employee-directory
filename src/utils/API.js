import axios from "axios";

const BASEURL = "https://randomuser.me/api/"

export default {
    getEmployees: function (name){
        return axios.get(BASEURL + "?results=1000");
    },
    getEmployeeByName: function (name){
        return axios.get(BASEURL + "?name=" + name);
    }
    // TODO: Figure out how to sort
    // sortEmployeeByName: function () {
    //     return axios.get(BASEURL)
    // }
}