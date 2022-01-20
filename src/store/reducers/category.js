const initialState = {
    loading: true,
    data: [],
    page: {},
    allData: [],
    searchKeyword: ''
}

function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "SET_CATEGORY":

            return { 
                ...state, 
                loading: false,
                data: action.data,
                page: action.page
            };

        case "SET_ALL_CATEGORY":

            return { 
                ...state, 
                loading: false,
                allData: action.data,
                page: action.page
            };

        case "SET_PAGE": 
            return {
                ...state, 
                page: action.page,
            }

        case "SET_SEARCH": 
            return {
                ...state, 
                searchKeyword: action.searchKeyword,
            }

        default:
            return state;
    }
}

export default reducer;