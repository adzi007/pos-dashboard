import axios from "axios";
import jwt_decode from "jwt-decode";
import store from "../store";

const { dispatch } = store; // direct access to redux store.

const axiosJWT = axios.create();


axiosJWT.interceptors.request.use(async (config) => {

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


export const postCategory = async (data) => {

    const config = {
            headers: { 'content-type': 'multipart/form-data' }
    }

    let submitCategory = await axiosJWT.post('http://localhost:5000/category', data, config);

    return submitCategory;

}

export const getCategoryById = async (id) => {

    const response = await axiosJWT.get('http://localhost:5000/category/' + id, {
        headers: {
            Authorization: `Bearer ${store.getState().auth.token}`
        }
    });

    return response.data.data;

}

export const updateCategory = async (data, id) => {

    const config = {
            headers: { 
                'content-type': 'multipart/form-data',
                'Authorization': `Bearer ${store.getState().auth.token}`
            }
    }

    let submitCategory = await axiosJWT.put('http://localhost:5000/category/'+id, data, config);

    return submitCategory;

} 