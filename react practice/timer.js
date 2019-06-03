import React, { Component } from "react";
import logo from "./logo.svg";
import "./App_hw3.css";

class App extends Component {
constructor(props) {
super(props);
this.state = {
time: 0,
isOn: false
};
}
startTimer = () => {
this.setState({
time: this.state.time,
start: Date.now() - this.state.time,
isOn: true
});
this.timer = setInterval(() => {
this.setState({
time: this.state.time + 1
});
}, 1000);
};
stopTimer = () => {
this.setState({ isOn: false });
clearInterval(this.timer);
};
resetTimer = () => {
this.setState({ time: 0 });
};
render() {
const startOrStop = this.state.isOn ? (
<button onClick={this.stopTimer}>STOP</button>
) : (
<button onClick={this.startTimer}>START</button>
);
const reset = <button onClick={this.resetTimer}>RESET</button>;
return (
<div>
<h3>timer: {this.state.time}</h3>
{startOrStop}
{reset}
</div>
);
}
}

export default App;