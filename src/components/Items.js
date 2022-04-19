// // import React, { Component } from "react"; // de hieu no la 1 clss component

// //  class Items extends Component {  // 


    
// //      render() {
// //          let listData = []
// //          if (this.props.listData) {
// //              listData = this.props.listData.map((item, key) => {
// //                  return (
// //                      <tr key = {key}>
// //                          <th>{item.id}</th>
// //                          <th>{item.name}</th>
// //                          <th>{item.school}</th>
// //                      </tr>
// //                  )
// //              })
// //             }
// //          return (
// //              <div className="flex" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30     }}>
// //                  <div>
// //                      <table className="list-item">
// //                          <tbody>
// //                              <tr>
// //                                  <th className="id">ID cua du lieu</th> 
// //                                  <th className="name">TEN cua du lieu</th>
// //                                  <th className="name">TRUONG cua du lieu</th>
// //                              </tr>
// //                              {listData}
// //                          </tbody>
// //                      </table>
// //                  </div>
// //              </div>
// //          )

         
// //      }
// //  }
                                                                       
// //  export default Items;          



// import React, { Component } from "react"
 
// class Items extends Component {

//     state = {
//         name: ''
//     }

//     render () {

//         let list = []
//         if (this.props.listData) {
//             list = this.props.listData.map((item,key) => {
//                 return (
//                     <tr key={key} >
//                         <th>{item.id}</th>
//                         <th>{item.name}</th>
//                     </tr>
//                 )
//             })
//         }   
        

//         return (
//             <div>

//                 {/* <input onChange={(e)=>this.setState({name:e.target.value})}/>
//                 <button onClick={()=>this.props.add({name:this.state.name})}>ADD</button> */}

//                 <input onChange={(e) => this.setState ({name:e.target.value})} />
//                 <button onClick = {() => this.props.addItem({name: this.state.name})} >Add</button>

        

//                 <table>
//                     <tbody> 
//                         <tr>
//                             <th>ID</th>
//                             <th>Name</th>
//                         </tr>

                        
//                         {list}
//                     </tbody>
//                 </table>
//             </div>
//         )

//     }
// }

// export default Items





import React, {Component} from "react"
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'




class Items extends Component {

    state = { name: ''}
    

    render() {

        let list = [];
        if(this.props.listData) {
            list = this.props.listData.map((item, key) => {
                return (
                     <tr key={key} >
                         <th>{item.id}</th>
                        <th>{item.name}</th>
                        <th><button onClick={() => {this.props.deleteData(item.id)}}>DELETE</button></th>
                        
                    </tr>
                    
                )})
        }



        return (
            <div>
              <TextField onChange={(e) =>this.setState({name: e.target.value})}  label="nhap vao day" variant="outlined" style={{width:500, height:20}} />
               <Button style={{width:100, height:55}} variant="contained" onClick = {() => this.props.addItems({name: this.state.name})}>Add</Button>
                <table>
                    <tbody>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            
                        </tr>
                        {list}
                    </tbody>
                    
                </table>
            </div>
        )
    }
}

export default Items

