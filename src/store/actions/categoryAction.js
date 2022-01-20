import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../index";

const axiosJWT = axios.create();
let expired  = '';

const { dispatch } = store; // direct access to redux store.

axiosJWT.interceptors.request.use(async (config) => {

    const currentDate = new Date();
    if (expired * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        const decoded = jwt_decode(response.data.accessToken);
        
        dispatch({
            type: "SET_TOKEN",
            token: response.data.accessToken,
            expire: decoded.exp
        });
    }

    return config;
    
}, (error) => {
    return Promise.reject(error);
});


export const getCategory = (pageChange = null, searchKeyword = '') => {

    return async (dispatch, getState) => {

        expired = getState().auth.expire

        const searchKeyword = getState().category.searchKeyword

        let  apiUrl = ""

        let page = pageChange !== null ? pageChange : 1;


        if(searchKeyword == ""){
            apiUrl = "http://localhost:5000/category?page="+page;
        }else{
            apiUrl = "http://localhost:5000/category?search="+searchKeyword+"&page="+page
        }

        const response = await axiosJWT.get(apiUrl, {
                headers: {
                    Authorization: `Bearer ${getState().auth.token}`
                }
        });

        dispatch({
            type: "SET_CATEGORY",
            data: response.data.data,
            page: response.data.page
        });

    }
}

export const getCategoryAll = () => {

    return async (dispatch, getState) => {

        expired = getState().auth.expire

        const response = await axiosJWT.get("http://localhost:5000/category-all", {
            headers: {
                Authorization: `Bearer ${getState().auth.token}`
            }
        });

        dispatch({
            type: "SET_ALL_CATEGORY",
            data: response.data.data,
            page: response.data.page
        });

    }
}

