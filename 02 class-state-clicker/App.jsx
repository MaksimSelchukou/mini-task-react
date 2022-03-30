import React, { Component } from "react";

class App extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const countStyle = {
      margin: "0 0.75rem",
      dispay: "inline-block",
    };
    return (
      <div className="App" style={{ margin: "auto", width: "300px" }}>
        <button onClick={this.increment}>+</button>
        <span style={countStyle}>{this.state.count}</span>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;
