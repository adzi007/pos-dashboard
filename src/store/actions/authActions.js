import axios from "axios";
import jwt_decode from "jwt-decode";

// require('dotenv').config()

const { REACT_APP_BASE_URL } = process.env;

export const getToken = () => {

    return async (dispatch, getState) => {

        // console.log("base url ", REACT_APP_BASE_URL);

        try {

            const respons = await axios.get("http://localhost:5000/token");
            const decoded = jwt_decode(respons.data.accessToken);
            dispatch({
                type: "SET_TOKEN",
                token: respons.data.accessToken,
                expire: decoded.exp
            });
            
        } catch (error) {

            window.location.href = REACT_APP_BASE_URL+"/login";
            
        }

    }
}