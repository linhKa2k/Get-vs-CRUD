import React from "react";
import Items from "../components/Items";
import * as actions from "../actions/ItemPageActions";
import { connect } from "react-redux";

class ItemPageContainer extends React.Component {
  
  componentDidMount() {
    this.props.paginationData({activePage: 1});
  }
  

  render() {
    return <Items {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    listData: state.itemsReducer.listItem,
    
    totalPageData: state.itemsReducer.totalPage
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
    }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);
