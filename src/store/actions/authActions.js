import axios from "axios";
import jwt_decode from "jwt-decode";

export const getToken = () => {

    return async (dispatch, getState) => {

        try {

            const respons = await axios.get("http://localhost:5000/token");
            const decoded = jwt_decode(respons.data.accessToken);
            dispatch({
                type: "SET_TOKEN",
                token: respons.data.accessToken,
                expire: decoded.exp
            });
            
        } catch (error) {

            window.location.href = "http://localhost:3000/login";
            
        }

    }
}