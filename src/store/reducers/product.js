const initialState = {
    loading: true,
    data: [],
    page: {},
    allData: [],
    searchKeyword: ''
}

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "SET_PRODUCT":

            return { 
                ...state, 
                loading: false,
                data: action.data,
                page: action.page
            };

        case "SET_SEARCH_PRODUCT": 
            return {
                ...state, 
                searchKeyword: action.searchKeyword,
            }

        default:
            return state;
    }
}

export default reducer;