import React, { Component } from "react";
import logo from "./logo.svg";
import "./App_hw2.css";

class App extends Component {
constructor(props) {
super(props);
this.state = { number: 1 };
}
addOne = () => {
this.setState({ number: this.state.number + 1 });
};
minusOne = () => {
this.setState({ number: this.state.number - 1 });
};
render() {
const { number } = this.state;
return (
<div className="App">
<h1>{number}</h1>
<button className="btn add" onClick={this.addOne}>
Increase
</button>
<button className="btn minus" onClick={this.minusOne}>
Decrease
</button>
</div>
);
}
}

export default App;