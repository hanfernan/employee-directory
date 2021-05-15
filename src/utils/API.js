import axios from "axios";

const BASEURL = "https://randomuser.me/api/"

export default {
    getEmployees: function (){
        return axios.get(BASEURL + "?results=100");
    },
    getEmployeeByName: function (name){
        return axios.get(BASEURL + "?name=" + name);
    },

    filterEmployeeByLocation
    // TODO: Figure out how to sort
    // sortEmployeeByName: function () {
    //     return axios.get(BASEURL)
    // }
}