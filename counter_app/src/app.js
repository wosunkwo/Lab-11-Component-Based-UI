'use strict';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
      </React.Fragment>
    );
  }
}

const Header = () => {
  return (
    <h2>Hi, Welcome to my Counter App</h2>
  );
};

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  handleAddClick = (event) => {
    event.preventDefault();
    let number = this.state.number + 1;
    this.setState({number});
  };

  handleSubtractClick = (event) => {
    event.preventDefault();
    let number = this.state.number - 1;
    this.setState({number});
  };

  render(){
    return (
      <React.Fragment>
        <p>{this.state.number}</p>
        <button onClick={this.handleAddClick}> + </button>
        <button onClick = {this.handleSubtractClick}> - </button>
      </React.Fragment>
    );
  }
}

export default App;
