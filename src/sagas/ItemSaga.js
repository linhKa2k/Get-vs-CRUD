import { put, takeEvery } from "redux-saga/effects";
import * as types from "../constant";
import {
  callApi,
  addApi,
  deleteApi,
  updateApi,
  searchApi,
  paginationApi,
  searchPaginationApi,
} from "../fetchAPI/getItems";

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
    yield addApi(action.payload);
    console.log(action.payload, "log cua addddddd");

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
      payload: ress,
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

function* paginationListData(action) {
  try {
    const activePageData = yield paginationApi(action.payload);
    const totalItem = yield callApi();
    // const totalPage = Math.ceil(totalItem.length / types.limit);
    const totalPage = Math.ceil(totalItem.length / types.limit);
    yield put({
      type: types.PAGINATION_ITEM_SUCCESS,
      payload: {
        activePageData: activePageData,
        totalPage: totalPage,
        activePage: action.payload.activePage,
      },
    });
  } catch (error) {
    yield put({
      type: types.PAGINATION_ITEM_FAILURE,
      payload: {
        errorMessage: error.message,
      },
    });
  }
}

function* searchPaginationListData(action) {
  try {
    const totalSearch = yield searchPaginationApi(action.payload);
    const totalItem = yield searchApi(action.payload.textSearch);
    const totalPage = Math.ceil(totalItem.length / types.limit);
    yield put({
      type: types.SEARCH_PAGINATION_ITEM_SUCCESS,
      payload: {
        totalSearch: totalSearch,
        totalPage: totalPage,
        activePage: action.payload.activePage,
        textSearch: action.payload.textSearch,
      },
    });
  } catch (error) {
    yield put({
      type: types.SEARCH_PAGINATION_ITEM_FAILURE,
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
  takeEvery(types.SEARCH_ITEM_REQUEST, searchListData),
  takeEvery(types.PAGINATION_ITEM_REQUEST, paginationListData),
  takeEvery(types.SEARCH_PAGINATION_ITEM_REQUEST, searchPaginationListData),
];
