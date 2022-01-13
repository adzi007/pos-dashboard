import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";

const { dispatch } = store; // direct access to redux store.

const axiosJWT = axios.create();
let expire  = '';

const axiosInterceptor = async () => {
    expire = await store.getState().auth.expire;
}

axiosJWT.interceptors.request.use(async (config) => {

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



export const dataCategory = async (page) => {

    axiosInterceptor();
    let params = "";

    if (page !== null) {
        params = "?page=1";
    }else{
        params = "?page="+page;
    }

    const response = await axiosJWT.get("http://localhost:5000/category" + params, {
            headers: {
                Authorization: `Bearer ${store.getState().auth.token}`
            }
    });
    return response.data;

}