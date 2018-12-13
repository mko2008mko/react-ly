import React from 'react'
import AppTopBar from '../../components/app-topbar'
import './style.less'
import { Button, Toast } from 'antd-mobile'
import { connect } from 'react-redux'
import { getLogin } from './store/login.redux'
import { Link } from 'react-router-dom'
import LYFormGJ from '../../components/gaojieform';


@connect(
  state => state.userReducer,
  { getLogin }
)
@LYFormGJ
class Login extends React.Component {
  constructor(props) {
    super()
    // this.state = {
    //   username: '',
    //   pwd: '',
    //   vcode: ''
    // }
  }

  // handleChange = (k, v) => {
  //   // console.log(k,v.target.value)
  //   this.setState({ [k]: v.target.value })
  // }

  handleSubmit = () => {
    if (!this.props.state.username) {
      Toast.fail('请输入用户名', 1)
    } else if (!this.props.state.pwd) {
      Toast.fail('请输入密码', 1)
    } else if (!this.props.state.vcode) {
      Toast.fail('请输入验证码', 1)
    } else {
      this.props.getLogin(this.state)
      // console.log(this.state);
    }
  }

  componentDidUpdate(ns, np) {
    if (this.props.username) {
      this.props.history.goBack()
    }
  }
  

  render() {
    const {handleChange} = this.props;
    return (
      <div className="login-wrapper">
        <AppTopBar title="登录" />
        <div className="login-form-wrapper">
          <input type="text" placeholder="输入用户/手机号" onChange={handleChange.bind(this, 'username')} />
          <input type="password" placeholder="输入密码" onChange={handleChange.bind(this, 'pwd')} />
          <input type="text" placeholder="输入验证码" onChange={handleChange.bind(this, 'vcode')} />
          <Button onClick={this.handleSubmit}>提交</Button>
          <Link to={`/register`}>
            <div>
              <span className="left valign">注册</span>
              <span className="right valign">></span>
            </div>
          </Link>
          <div>
            <span className="left valign">找回</span>
            <span className="right valign">></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
