const initialState = {
    token: "",
    expire:"",
    loading: true
}

function reducer(state = initialState, action) {

    // console.log("action terpanggil", action);
    
    switch (action.type) {
        case "SET_TOKEN":

            return { 
                ...state, 
                loading: false,
                token: action.token,
                expire: action.expire
            };

        default:
            return state;
    }
}

export default reducer;