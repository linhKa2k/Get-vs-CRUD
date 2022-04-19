// import React from "react"; 
// import Items from '../components/Items'; 
// import * as actions from "../actions/ItemPageActions";
// import {connect} from "react-redux"; 

// class ItemPageContainer extends React.Component {  
//     componentDidMount(){  
//         this.props.initLoad() 
//     }

//     render() { 
//         return (
//             <Items {...this.props} /> 
//         );
//     }
// }

// const mapStateToProps = (state) => {  
//     return {
//         listData: state.itemsReducer.listItem
//     }
// }


// const mapDispatchToProps = (dispatch) =>{ 
//     return {
//         initLoad : () => {
//             dispatch(actions.getListItem()) 
//         } 
//     } 
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)


   
// import React from 'react';
// import Items from '../components/Items'
// import * as actions from '../actions/ItemPageActions'
// import {connect} from 'react-redux';

// class ItemPageContainer extends React.Component {
//     componentDidMount() {
//         this.props.initLoad();
//     }

//     render() {

//         return (
//             <Items {...this.props} />
//         )
//     }
// }

// const mapStateToProps = (state) => {
//     return {
//         listData: state.itemsReducer.listItem
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         initLoad: () => ( dispatch(actions.getListItem())) ,
//         addItem: (action) => (dispatch (actions.addItem(action))),
           
        
//         }   
        
//     }


// export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)


import React from 'react'
import Items from '../components/Items'
import * as actions from '../actions/ItemPageActions'
import {connect} from 'react-redux'

class ItemPageContainer extends React.Component {

    componentDidMount(){
        this.props.initLoad()
    }



    render() {


        return (    
            <Items {...this.props} />
        )
    }
}


const mapStateToProps = (state) => {
    return {
        listData: state.itemsReducer.listItem
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
    initLoad : () => {
     dispatch(actions.getListItem())
     },
    addItems : (action) => {
        dispatch(actions.addItem(action))
    },
    deleteData: (data) => {
        dispatch(actions.deleteItem(data))
    }


}

}

export default connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
