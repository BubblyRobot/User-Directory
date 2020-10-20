import Axios from "axios";
const BASEURL = "https://randomuser.me/api/?nat=us&results=20";


export default {
    search: function () {
        return Axios.get(BASEURL);
    }
};