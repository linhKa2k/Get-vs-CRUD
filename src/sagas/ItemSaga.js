
/* 
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

*/


import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constant";
import { callApi, addApi, deleteApi, updateApi, searchApi } from "../fetchAPI/getItems";

function* getListItem() {
  try {
    const res = yield callApi();

    yield put({
      type: types.GET_ITEM_SUCCESS,
      payload: res,
    });
  } catch (error) {
    yield put({
      type: types.GET_ITEM_FAILURE,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

function* addListData(action) {
  try {
    const res = yield addApi(action.payload);
    console.log(action.payload, 'log cua addddddd');

    yield put({
      type: types.ADD_ITEM_SUCCESS,
    });

    yield put({
      type: types.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.ADD_ITEM_FAILURE,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

function* deleteData(action) {
  try {
    yield deleteApi(action.payload);
    yield put({
      type: types.DELETE_ITEM_SUCCESS,
    });
    yield put({
      type: types.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.DELETE_ITEM_FAILURE,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}
function* updateListDada(action) {
  try {
    yield updateApi(action.payload);
    yield put({
      type: types.UPDATE_ITEM_SUCCESS,
    });
    yield put({
      type: types.GET_ITEM_REQUEST,
    });
  } catch (error) {
    yield put({
      type: types.UPDATE_ITEM_FAILURE,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

function* searchListData(action) {
  try {
   const ress = yield searchApi(action.payload);
    yield put({
      type: types.SEARCH_ITEM_SUCCESS,
      payload: ress
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_ITEM_FAILURE,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

export const ItemSaga = [
  takeEvery(types.GET_ITEM_REQUEST, getListItem),
  takeEvery(types.ADD_ITEM_REQUEST, addListData),
  takeEvery(types.DELETE_ITEM_REQUEST, deleteData),
  takeEvery(types.UPDATE_ITEM_REQUEST, updateListDada),
  takeEvery(types.SEARCH_ITEM_REQUEST, searchListData)
];
