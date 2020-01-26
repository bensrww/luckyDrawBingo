import React from "react";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listNumber: [],
      currentIndex: 0
    };
  }

  componentDidMount() {
    const arr = this.generateSquence();
    this.setState({
      listNumber: arr
    });
  }

  generateSquence = () => {
    let arr = [];
    while (arr.length < 100) {
      var r = Math.floor(Math.random() * 100) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }
    console.log("arr", arr);
    return arr;
  };

  increaseIndex = () => {
    this.setState(prevState => {
      return { currentIndex: prevState.currentIndex + 1 };
    });
    console.log("increase", this.state.currentIndex);
  };

  reset = () => {
    this.setState(() => {
      return { currentIndex: 0 };
    });
  };

  render() {
    const { listNumber, currentIndex } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div class="section" style={{ fontSize: "50px" }}>
          <div>Number:</div>
          <span>{listNumber[currentIndex]}</span>
        </div>
        <div onClick={this.increaseIndex} class="myButton section">
          Next Number
        </div>
        <div onClick={this.increaseIndex} class="red-button section">
          RESET
        </div>
      </div>
    );
  }
}
