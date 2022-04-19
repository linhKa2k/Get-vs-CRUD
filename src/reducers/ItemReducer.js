// import * as types from '../constant'
// const DEFAULT_STATE = {
//     listItem: [],  
//     dataFetched: false,   //trang thai data da dc lay hay chua
//     isFetching: false,  //trang thai cho
//     error: false,
//     errorMessage: null,
// }

// export default (state = DEFAULT_STATE, action) => {
//     switch (action.type) {         
//           // type o day la o saga ve

//           //GET
//         case types.GET_ITEM_REQUEST:   // từ container gửi sang
//         case types.ADD_ITEM_REQUEST:
//             return {
//                 ...state,
//                 isFetching: true,
//             }
//      case types.GET_ITEM_SUCCESS:  // từ Saga
             
//             return {
//                 ...state,
//                 isFetching: false,  // isFetching cap nhat theo GET_ITEM _REQUEST
//                 dataFetched: true,
//                 error: false,
//                 errorMessage:null,
//                 listItem: action.payload
//             }


//         case types.GET_ITEM_FAILURE:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error: true,
//                 errorMessage:action.payload.errorMessage
//             }


//             //ADD
//             case types.ADD_ITEM_SUCCESS:  // từ Saga
             
//             return {
//                 ...state,
//                 isFetching: false,  
//                 dataFetched: true,
              
//             }


//         case types.ADD_ITEM_FAILURE:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error: true,
//                 errorMessage:action.payload.errorMessage
//             }
    

//         default: 
//             return state;
//     }
// }


import * as types from '../constant'

const DEFAULT_STATE = { 
    listData : [],
    isFetching: false,
    dataFetched: false,
    error: false,
    errorMessage:null
}

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {

        case types.GET_ITEM_REQUEST:
            case types.ADD_ITEM_REQUEST:
            case types.DELETE_ITEM_REQUEST:

            
            return {
                ...state,
                isFetching: true,
            }
        case types.GET_ITEM_SUCCESS:
            return {
                ...state,
                isFetching: false,
                dataFetched: true,
                listItem: action.payload

            }
        case types.GET_ITEM_FAILURE:
            return {
                ...state,
                error: true,
                errorMessage: action.payload.errorMessage
            }
        
            case types.ADD_ITEM_SUCCESS:
                return {
                    ...state,
                    isFetching: false,
                    dataFetched: true
    
                }
            case types.ADD_ITEM_FAILURE:
                return {
                    ...state,
                    error: true,
                    errorMessage: action.payload.errorMessage
                }
                case types.DELETE_ITEM_SUCCESS:
                    return {
                        ...state,
                        isFetching: false,
                        dataFetched: true
        
                    }
                case types.DELETE_ITEM_FAILURE:
                    return {
                        ...state,
                        error: true,
                        errorMessage: action.payload.errorMessage
                    }
      
        

        default:
            return state;

    }
    
}







