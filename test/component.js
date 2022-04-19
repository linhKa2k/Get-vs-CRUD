import React, { Component } from "react"; // de hieu no la 1 clss component

 class Items extends Component {  // 
     render() {
         let listData = []
         if (this.props.listData) {
             listData = this.props.listData.map((item, key) => {
                 return (
                     <tr key = {key}>
                         <th>{item.id}</th>
                         <th>{item.name}</th>
                     </tr>
                 )
             })
         }
         return (
             <div className="flex" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 30     }}>
                 <div>
                     <table className="list-item">
                         <tbody>
                             <tr>
                                 <th className="id">ID cua du lieu</th> 
                                 <th className="name">TEN cua du lieu</th>
                             </tr>
                             {listData}
                         </tbody>
                     </table>
                 </div>
             </div>
         )
     }
 }
                                                                       
 export default Items;          


 // component là 1 mảnh giao diện