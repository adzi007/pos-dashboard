const initialState = {
    loading: true,
    users: [{
        id: 1,
        name: "Udin"
    }]
}

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "SET_USERS":

            return { 
                ...state, 
                // users: action.users 
                // push function
                loading: false,
                users: [ ...state.users, ...action.users  ]
            };

        default:
            return state;
    }
}

export default reducer;