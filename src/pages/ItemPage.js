import React from "react";
import ItemContainer from "../container/ItemPageContainer";

class ItemPage extends React.Component {
  render() {
    return (
      <div className="ItemPage">
        <h1>Trang Items</h1>
        <h1>introduce</h1>
        <ItemContainer />
      </div>
    );
  }
}

export default ItemPage;
