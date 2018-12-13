import React from 'react';

export default function gaojieForm(Comp) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super();
      this.state = {};
    }

    handleChange = (k, v) => {
    //   console.log(k, v.target.value);
      this.setState({ [k]: v.target.value });
    };

    render() {
      return <Comp handleChange={this.handleChange} state={this.state} {...this.props} />;
    }
  };
}
