import React from "react";
import Items from "../components/Items";
import * as actions from "../actions/ItemPageActions";
import { connect } from "react-redux";

class ItemPageContainer extends React.Component {
  componentDidMount() {
    this.props.paginationData({ activePage: 1 });
  }

  render() {
    return <Items {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  console.log(state.itemsReducer, "itemm");
  return {
    listData: state.itemsReducer.listData,
    totalPage: state.itemsReducer.totalPage,
    activePage: state.itemsReducer.activePage,
    textSearch: state.itemsReducer.textSearch,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    initLoad: () => {
      dispatch(actions.getListItem());
    },
    addItems: (data) => {
      dispatch(actions.addItem(data));
    },
    deleteData: (data) => {
      dispatch(actions.deleteItem(data));
    },
    updateData: (data) => {
      dispatch(actions.updateItem(data));
    },
    searchData: (data) => {
      dispatch(actions.searchItem(data));
    },
    paginationData: (data) => {
      dispatch(actions.paginationItem(data));
    },
    searchPaginationData: (data) => {
      dispatch(actions.searchPaginationItem(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);
