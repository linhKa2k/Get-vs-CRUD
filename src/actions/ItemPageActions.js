// import * as types from '../constant'
// export function getListItem(payload){ // return (tra ve return)  // return (la ofject chua key, value)
//     return ({   
//         type: types.GET_ITEM_REQUEST,
//         payload 
//     })
// }

// import * as types from '../constant'  // de phat hành đồng request cho comtaicer

// export function getListItem (payload) {
//     return ({
//         type : types.GET_ITEM_REQUEST,  
//         payload
//     })
// }

// export function addItem (payload) {
//     return {
//         type: types.ADD_ITEM_REQUEST,
//         payload
//     }
// }


import * as types from '../constant'

export function getListItem(payload) {
    return ({
        type: types.GET_ITEM_REQUEST, 
        payload
    })
}

export function addItem (payload) {
    return ({
        type: types.ADD_ITEM_REQUEST,
        payload
    })
}


export function deleteItem (payload) {
    return ({
        type: types.DELETE_ITEM_REQUEST,
        payload
    })
}



// export function getListItemSuccess (payload) {
//     return ({
//         type : types.GET_ITEM_SUCCESS, 
//         payload 
//     })
// }

// export function getListItemFalure (payload) {
//     return ({
//         type : types.GET_ITEM_FAILURE, 
//         payload 
//     })
// }