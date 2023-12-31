import { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>Nyuci Mobil</h6>
        <div className="todo-icon">
          <span className="mx-2 text-succes">
            <i className="fas fa-pen"></i>
          </span>
          <span className="mx-2 text-danger">
            <i className="fas fa-trash"></i>
          </span>
        </div>
      </li>
    );
  }
}
