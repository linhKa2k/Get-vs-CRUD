import * as types from '../constant'
const DEFAULT_STATE = {
    listItem: [],  
    dataFetched: false,   //trang thai data da dc lay hay chua
    isFetching: false,  //trang thai cho
    error: false,
    errorMessage: null,
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {           // type o day la o saga ve
        case types.GET_ITEM_REQUEST:
            return {
                ...state,
                isFetching: true,
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,  // isFetching cap nhat theo GET_ITEM _REQUEST
                dataFetched: true,
                error: false,
                errorMessage:null,
                listItem: action.payload
            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage:action.payload.errorMessage
            }
        default: 
            return state;
    }
}


// bien : gom key : la ten cua Item, value: la du lieu(gia tri) 