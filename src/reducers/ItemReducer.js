import * as types from "../constant";

const DEFAULT_STATE = {
  listData: [],
  isFetching: false,
  dataFetched: false,
  error: false,
  errorMessage: null,

  totalPage: null,
  activePage: null,
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.GET_ITEM_REQUEST:
    case types.ADD_ITEM_REQUEST:
    case types.DELETE_ITEM_REQUEST:
    case types.UPDATE_ITEM_REQUEST:
    case types.SEARCH_ITEM_REQUEST:
    case types.PAGINATION_ITEM_REQUEST:
    case types.SEARCH_PAGINATION_ITEM_REQUEST:
      return {
        ...state,
        isFetching: true,
        dataFetched: false,
      };
    case types.GET_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload,
      };
    case types.GET_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    case types.ADD_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
      };
    case types.ADD_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.DELETE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
      };
    case types.DELETE_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.UPDATE_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
      };
    case types.UPDATE_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    case types.SEARCH_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload,
      };
    case types.SEARCH_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.PAGINATION_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload.activePageData,
        totalPage: action.payload.totalPage,
        activePage: action.payload.activePage,
      };

    case types.PAGINATION_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };
    case types.SEARCH_PAGINATION_ITEM_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        listData: action.payload.totalSearch,
        totalPage: action.payload.totalPage,
        activePage: action.payload.activePage,
        textSearch: action.payload.textSearch,
      };

    case types.SEARCH_PAGINATION_ITEM_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.errorMessage,
      };

    default:
      return state;
  }
};
