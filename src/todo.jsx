import React, { Component } from "react";

export default class Todo extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res => res.json())
      .then(json => {
        this.setState({ todos: json });
      });
  }

  render() {
    const styleSheet = {
      cell: {
        margin: "10px",
        background: "#d7d7d9",
        padding: "10px",
        borderRadius: "10px"
      },
      container: {
        background: "#b8b8ba",
        borderRadius: "10px",
        padding: "10px"
      }
    };
    return (
      <div style={styleSheet.container}>
        <p>Todos</p>
        {this.state.todos.map(function(data) {
          return (
            <div key={data.id} style={styleSheet.cell}>
              <div>{data.user_id}</div>
              <div>{data.title}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
