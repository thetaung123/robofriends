import React from "react";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  onBtnClick = () => this.setState(state => ({ count: state.count + 1 }));

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count;
  }

  render() {
    return (
      <button id="counter" color={this.props.color} onClick={this.onBtnClick}>
        Count: {this.state.count}
      </button>
    )
  }
}

export default CounterButton;
