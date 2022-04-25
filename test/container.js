import React from "react";
import Items from "../components/Items";
import * as actions from "../actions/ItemPageActions";
import { connect } from "react-redux";

class ItemPageContainer extends React.Component {
  componentDidMount() {
    this.props.initLoad();
  }

  render() {
    return <Items {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    listData: state.itemsReducer.listItem,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer);





// import React from "react"; //ke thua thu vien React
// import Items from '../components/Items'; // goi thg conponent con vao thg cha
// import * as actions from "../actions/ItemPageActions";// la cac action type la cac hanh dong     *payload la tat cac cac hanh dong*
// import {connect} from "react-redux"; // connect vao store    {connect} la 1 ham trong react-redux

// class ItemPageContainer extends React.Component {  //class ten ham tinh ke thua   extends React.COmponent la de hieu day la class 
//     componentDidMount(){  //la vong doi  // chay lan dau tien va 1 lan sau render
//         this.props.initLoad() // la ham get de day du lieu len man hinh  
//     }

//     render() { 
//         return (
//             <Items {...this.props} /> // la dang chuyen du lieu properties tu cha ve thg con    day la jsx: là cú phap mở rộng của JS dược sử dụng trong React và viết dc cú pháp của JS trong HTML
//         );
//     }
// }
// /* ban du lieu  */
// const mapStateToProps = (state) => {  //Nó kết nối trạng thái redux với cac component
//     return {
//         listData: state.itemsReducer.listItem   // listData khai bao o component lay du lieu tu reducer
//     }
// }

// // state la túi luu tru du lieu trong 1 component sinh ra no va co the thay doi dc
// // props là túi lưu trữ truyen du lieu tu thg cha sang thg con va ko the thay doi dc 
// /* choc vao store de lay du lieu ve */
// const mapDispatchToProps = (dispatch) =>{ // Nó kết nối các hành động redux với   //    

//     return {
//         initLoad : () => {
//             dispatch(actions.getListItem())
//         } 
//     } 
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer) // export la xuat di cho nguoi khac su dung  import la nhap vao cho minh su dung
// //export laf xuat di 

// // import * as nhap tat ca vao 1 cai


// //tai sao lai viet mapStateToProps truoc mapDisPatchToProps trong connect
// // boi  vi no la cu phap bat buoc


// /* container ban sang saga bang mapDisPatchToProps */
