import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  componentDidMount() {
    console.log("Компонент монтирован");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Счетчик обновлен");
    console.log("Предыдущее состояние: ", prevState);
    console.log("Текущее состояние: ", this.state);
  }

  componentWillUnmount() {
    console.log("Компонент будет размонтирован");
  }

  render() {
    return (
      <div>
        <h2>Счетчик: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Увеличить</button>
      </div>
    );
  }
}

export default Counter;
