const initialState = {
    loading: true,
    data: [],
    page: {},
}

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "SET_CATEGORY":

            return { 
                ...state, 
                // users: action.users 
                // push function
                loading: false,
                data: action.data,
                page: action.page
            };

        case "SET_PAGE": 
            return {
                ...state, 
                page: action.page,
            }

        default:
            return state;
    }
}

export default reducer;