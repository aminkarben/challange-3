import { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    id: 0,
    item: "",
    editItem: false,
  };
  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      item: this.state.item,
    };
    console.log(newItem);

    const updatedItems = [...this.state.items];

    this.setState({
      items: updatedItems,
      item: "",
      id: 0,
      editItem: false,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
