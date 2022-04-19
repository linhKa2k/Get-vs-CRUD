import {put, takeEvery} from 'redux-saga/effects';
import getItems from "../fetchAPI/getItems"
import * as types from '../constant'




function * getListItem() {  // getListItem lay tu Actions
    try {
        const res = yield getItems()  // B1: Goi den Fetch API
       
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
    export const ItemSaga = [
        takeEvery(types.GET_ITEM_REQUEST, getListItem)
    ];