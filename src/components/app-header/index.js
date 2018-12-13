import React from 'react';
import "./style.less";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getLogout } from "../../pages/login/store/login.redux";
import { Modal } from "antd-mobile";

const alert = Modal.alert;


class AppHeader extends React.Component {


    render() {
        const { username,getLogout } = this.props;
        // console.log('-----', username)
        return (
            <header >
               
                {username ?
                    <span onClick={getLogout}>{username}</span>
                    :
                    <Link to={`/login`}>
                        <img className="login" src="//leyouimage.leyou.com.cn/mleyou/mall/images/home.png" alt="">
                        </img>
                    </Link>
                }

            </header>
        )
    }
}

const mapStateToProps = state => {
    return {
        username: state.userReducer.username
    }
}

const mapDisptachToProps = dispatch => ({
    getLogout() {
        alert('退出', '你确定要退出登录？', [
            { text: '取消', onPress: () => console.log('cancel') },
            { text: '确定', onPress: () => dispatch(getLogout()) },
          ])
        
    }
})

export default connect(mapStateToProps, mapDisptachToProps)(AppHeader);