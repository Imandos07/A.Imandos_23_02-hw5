import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state) => ({
      time: state.time + 1,
    }));
  }

  render() {
    return (
      <div>
        <h2>Timer</h2>
        <p>Seconds: {this.state.time}</p>
      </div>
    );
  }
}

export default Timer;
