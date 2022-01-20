import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";

const { dispatch } = store; // direct access to redux store.

const axiosJWT = axios.create();
// let expire  = '';

// const intercept = async () => {

//     expire = await store.getState().auth.expire;
// }

axiosJWT.interceptors.request.use(async (config) => {

    // intercept()

    let expire = await store.getState().auth.expire;

    const currentDate = new Date();
    if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        const decoded = jwt_decode(response.data.accessToken);

        dispatch({
            type: "SET_TOKEN",
            token: response.data.accessToken,
            expire: decoded.exp
        });
        // console.log("intercept axios done");
    }

    return config;

    }, (error) => {
    return Promise.reject(error);
});

class foo {


    constructor() {  // Constructor

        // intercept();

    }

    async getFoo(){

        const response = await axiosJWT.get("http://localhost:5000/category", {
            headers: {
                Authorization: `Bearer ${store.getState().auth.token}`
            }
        });
        return response.data;

    }
}

export const { getFoo } = new foo();