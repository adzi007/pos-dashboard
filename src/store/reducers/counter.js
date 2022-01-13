
const initialState = {
    counter : 10,
}

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "TAMBAH_COUNTER":

            return { 
                ...state, 
                counter: state.counter + 1 
            }
        case "KURANG_COUNTER":

            return { 
                ...state, 
                counter: state.counter - 1 
            }

        default:
            return state;
    }
}

export default reducer;