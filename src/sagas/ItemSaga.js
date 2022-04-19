// // import {put, takeEvery} from 'redux-saga/effects';
// // import getItems from "../fetchAPI/getItems"
// // import * as types from '../constant'




// // function * getListItem() {  // getListItem lay tu Actions
// //     try {
// //         const res = yield getItems()  // B1: Goi den Fetch API
       
// //         yield put({
// //             type: types.GET_ITEM_SUCCESS,
// //             payload: res
// //         })
// //     } catch (error) {
// //         yield put({
// //             type: types.GET_ITEM_FAILURE, 
// //             payload: {
// //                 errorMessage: error.message
// //             }
// //         })
// //     }
// // }
// //     export const ItemSaga = [
// //         takeEvery(types.GET_ITEM_REQUEST, getListItem)
// //     ];



// // import * as actions from '../actions/ItemPageActions'

//     // function * getListItem() {  // getListItem lay tu Actions
//     //     try {
//     //         const res = yield getItems()  // B1: Goi den Fetch API
           
//     //         yield put(actions.getListItemSuccess(res))
//     //     } catch (error) {
//     //         yield put(actions.getListItemFalure({
//     //             messageError:error.message
//     //         }))
//     //     }
//     // }
//     //     export const ItemSaga = [
//     //         takeEvery(types.GET_ITEM_REQUEST, getListItem)
//     //     ];



// // takeEvery :  3 tham so: (lay request ben reducer type.GET_ITEM_REQUEST, function (function *))   ban tu container (mapDisPatchToProps()) 



// /* function * - yied :  function * ten function () {  
//     try {   (bat dieu kien dung)

//         yield put ({
//             type: types.GET_ITEM_SUCCESS (ban SAGA  thong qua redux toi Reducer),   
//             payload: res ()
//         })

//     }case {
//             (bat dieu kien sai)

//     }

//             }

//     B1: Goi den Fetch API   (const ____ = yield  getItem-API ())

//  */
// import {put, takeEvery} from 'redux-saga/effects'
// import { callApi, addAPI  } from '../fetchAPI/getItems'
// import * as types from '../constant'

// function *  getListItem() {
//     try {
//         const res = yield callApi()

//         yield put ({
//             type : types.GET_ITEM_SUCCESS,
//             payload: res
//         })
//     }catch (error) {
//         yield put ({
//             type : types.GET_ITEM_FAILURE,
//             payload: {
//                 errorMessage: error.message
//             }
//         })
//     }
// }


// function * addItems(action) {
//     console.log("da nhan du lieu");
//     try {
//         const add = yield addAPI(action.payload)

//         yield put ({
//             type : types.ADD_ITEM_SUCCESS,
//             payload: add
//         })

//         yield put ({
//             type : types.GET_ITEM_REQUEST,
//         })

       
//     } catch (error) {
//         yield put ({
//             type : types.ADD_ITEM_FAILURE,  
//             payload: {
//                 errorMessage: error.message
//             }
//         })
//     }
// }



// export const ItemSaga = [
//     takeEvery(types.GET_ITEM_REQUEST, getListItem),
//     takeEvery(types.ADD_ITEM_REQUEST, addItems)
// ]

import {put, takeEvery} from 'redux-saga/effects'
import * as types from '../constant'
import {callApi, addApi, deleteApi} from '../fetchAPI/getItems'


function * getListItem() {
    try {
        
        const res = yield callApi()

        yield put({
            type: types.GET_ITEM_SUCCESS,
            payload: res
        })
    } catch (error) {
         yield put({
             type: types.GET_ITEM_FAILURE,
             payload: {
                 errorMessage: error.message
             }
            
            })
        
    }
}

function * addListData(action) {
    try {
      yield addApi(action.payload)
        yield put({
            type: types.ADD_ITEM_SUCCESS
        })
        yield put ({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put ({
            type: types.ADD_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}

function * deleteData(action) {
    try {
      yield deleteApi(action.payload)
        yield put({
            type: types.DELETE_ITEM_SUCCESS
        })
        yield put ({
            type: types.GET_ITEM_REQUEST
        })
    } catch (error) {
        yield put ({
            type: types.DELETE_ITEM_FAILURE,
            payload: {
                errorMessage: error.message
            }
        })
    }
}


export const ItemSaga = [
    takeEvery(types.GET_ITEM_REQUEST, getListItem),
    takeEvery(types.ADD_ITEM_REQUEST, addListData),
    takeEvery(types.DELETE_ITEM_REQUEST, deleteData)
]

