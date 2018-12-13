import React from 'react';
import './style.less';
import backImg from '../../static/back.png';
import menuImg from '../../static/menu.png';
import { withRouter } from 'react-router-dom';
import { TopLefNavPop } from '../../components/app-public-comp';

class AppTopBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isShow: false
    };
  }

  handleBackClick = () => {
    console.log(this.props.history);
    // this.props.history.goBack();
    this.props.history.go(-1);
  };

  handleMenuClick = () => {
    // this.setState({ isShow: true });
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));
  };

  render() {
    return (
      <div className="app-topbar-wrapper">
        <img src={backImg} alt="" onClick={this.handleBackClick} />
        <span>{this.props.title}</span>
        <img className="right" src={menuImg} alt="" onClick={this.handleMenuClick} />
        {this.state.isShow ? <TopLefNavPop /> : null}
      </div>
    );
  }
}

export default withRouter(AppTopBar);
