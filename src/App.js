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
    const newArr = this.generateSquence();
    this.setState(() => {
      return { currentIndex: 0, listNumber: newArr };
    });
  };

  render() {
    const { listNumber, currentIndex } = this.state;
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <div id="body">
          <div class="section" style={{ fontSize: "50px" }}>
            <div>Number:</div>
            <span>{listNumber[currentIndex]}</span>
          </div>
          <div onClick={this.increaseIndex} class="section">
            <span class="myButton">Next Number</span>
          </div>
          <div onClick={this.reset} class="section">
            <span class="red-button">RESET</span>
          </div>
        </div>

        <p id="debug">
          <div style={{ wordWrap: "break-word" }}>
            {this.state.listNumber.map((value, index, arr) => {
              if (arr[currentIndex] === value) {
                return (
                  <span style={{ backgroundColor: "green", color: "white" }}>
                    {value},
                  </span>
                );
              }
              return `${value},`;
            })}
          </div>
        </p>
      </div>
    );
  }
}
