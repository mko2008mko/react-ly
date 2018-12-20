import React from 'react';
import './style.less';

class Count extends React.Component {
  constructor(props) {
    super();
    const count = props.default;
    this.state = {
      count: count ? count : 1
    };
  }

  handleAddClick = () => {
    this.setState(prevState => {
      this.props.handleCountChange(prevState.count + 1);
      return { count: prevState.count + 1 };
    });
  };

  handleMinClick = () => {
    this.state.count > 0 &&
      this.setState(prevState => {
        this.props.handleCountChange(prevState.count - 1);
        return { count: prevState.count - 1 };
      });
  };

  render() {
    return (
      <div className="count-wrapper">
        <span className="count-btn" onClick={this.handleAddClick}>
          +
        </span>
        <span style={{ marginLeft: 5, marginRight: 5 }} className="count-xinashi">
          {this.state.count}
        </span>
        <span className="count-btn" onClick={this.handleMinClick}>
          -
        </span>
      </div>
    );
  }
}

export default Count;
