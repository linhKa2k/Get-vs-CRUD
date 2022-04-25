import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

class Items extends Component {
  state = {
    name: "",

    update: { id: "", nameUpdate: "" },
    search: { nameSearch: "" },
  };

  render() {
    let list = [];
    if (this.props.listData) {
      list = this.props.listData.map((item, key) => {
        return (
          <tr key={key}>
            <th>{item.id}</th>
            <th>{item.name}</th>
            <th>
              <button
                onClick={() => {
                  this.props.deleteData(item.id);
                }}
              >
                delete
              </button>
            </th>

            <th>
              <button
                onClick={() => {
                  this.setState({
                    update: {
                      id: item.id,
                      nameUpdate: item.name,
                    },
                  });
                }}
              >
                chon
              </button>
            </th>
          </tr>
        );
      });
    }


    return (
      <div>
        <TextField
          onChange={(e) => this.setState({ name: e.target.value })}
          label="nhap vao day"
          variant="outlined"
          style={{ width: 500, marginTop: 20 }}
        />
        <Button
          style={{ width: 100, height: 55, marginTop: 20 }}
          variant="contained"
          onClick={() => this.props.addItems({ name: this.state.name })}
        >
          Add
        </Button>
        <div>
          <TextField
            style={{ width: 400, marginTop: 20 }}
            label="nhap vao day de Update"
            onChange={(e) => {
              this.setState({
                update: {
                  ...this.state.update,
                  nameUpdate: e.target.value,
                },
              });
            }}
            value={this.state.update.nameUpdate}
          />
          <Button
            style={{ width: 100, height: 50, marginTop: 20 }}
            variant="contained"
            onClick={() => {
              this.props.updateData({
                name: this.state.update.nameUpdate,
                id: this.state.update.id,
              });
            }}
          >
            update
          </Button>
        </div>

        <div>
          <TextField
            label="nhap vao day"
            variant="outlined"
            style={{ width: 400, marginTop: 20 }}
            onChange={(e) =>
              this.setState({ search: { nameSearch: e.target.value } })
            }
          />
          <Button
            style={{ width: 100, height: 50, marginTop: 20 }}
            variant="contained"
            onClick={() =>
              this.props.searchData(this.state.search.nameSearch)
            }
          >
            Search
          </Button>
        </div>
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
    );
  }
}

export default Items;
