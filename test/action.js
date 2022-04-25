import * as types from "../constant";

export function getListItem() {
  return {
    type: types.GET_ITEM_REQUEST,
  };
}

export function addItem(payload) {
  return {
    type: types.ADD_ITEM_REQUEST,
    payload: payload,
  };
}

export function deleteItem(payload) {
  return {
    type: types.DELETE_ITEM_REQUEST,
    payload,
  };
}

export function updateItem(payload) {
  return {
    type: types.UPDATE_ITEM_REQUEST,
    payload,
  };
}

/* day la cach viet khac cua saga
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
*/