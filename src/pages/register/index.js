import React from 'react';
import AppTopBar from '../../components/app-topbar';
import { Button, Toast } from 'antd-mobile';
import { connect } from 'react-redux';
import { getRegister, getPcode } from '../login/store/login.redux';
import { AppDownloadItem } from '../../components/app-public-comp';
import LYFormGJ from '../../components/gaojieform';
import './style.less';

@connect(
  state => state.userReducer,
  { getRegister, getPcode }
)
class Register extends React.Component {
  constructor(props) {
    super();
    // this.state = {
    //   username: '',
    //   pcode: '',
    //   vcode: ''
    // };
  }

  // handleChange = (k, v) => {
  //   this.setState({ [k]: v.target.value });
  // };

  handlePcodeClick = () => {
    if (!this.props.state.username) {
      Toast.fail('请输入手机号', 1);
    } else if (!this.props.state.vcode) {
      Toast.fail('请输入图形验证码', 1);
    } else {
      this.props.getPcode(this.props.state.username);
    }
  };

  handleSubmit = () => {
    if (!this.props.state.username) {
      Toast.fail('请输入手机号', 1);
    } else if (!this.props.state.pcode) {
      Toast.fail('请输入手机验证码', 1);
    } else if (!this.props.state.vcode) {
      Toast.fail('请输入图形验证码', 1);
    } else if (this.props.state.pcode !== this.props.pcode) {
      Toast.fail('手机验证过吗不正确', 1);
    } else {
      this.props.getRegister(this.state);
    }
  };

  componentDidUpdate(ns, np) {
    if (this.props.username) {
      this.props.history.go(-2);
    }
  }

  render() {
    const { handleChange } = this.props;
    return (
      <div className="register-wrapper">
        <AppTopBar title="注册" />
        <div className="content-wrapper">
          <div>
            <label>手机号</label>
            <input type="text" placeholder="请输入手机号" onChange={handleChange.bind(this, 'username')} />
          </div>
          <div>
            <label>短信验证码</label>
            <input type="text" placeholder="请输入验证码" onChange={handleChange.bind(this, 'pcode')} />
            <input className="huoqu-btn" type="button" value="获取验证码" onClick={this.handlePcodeClick} />
          </div>
          <div>
            <label>验证码</label>
            <input type="text" placeholder="右侧验证码" onChange={handleChange.bind(this, 'vcode')} />
          </div>
          <p>同意《乐友网隐私权与服务条款》</p>
          <Button onClick={this.handleSubmit}>下一步</Button>
        </div>

        <AppDownloadItem />
      </div>
    );
  }
}

export default LYFormGJ(Register);
