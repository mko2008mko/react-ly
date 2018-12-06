import React from 'react';
import "./style.less";

class AppHeader extends React.Component {
    render() {
        return (
            <header >
                <a href="#;">
                    <img className="login" src="//leyouimage.leyou.com.cn/mleyou/mall/images/home.png" alt="">
                    </img>
                </a>
            </header>
        )
    }
}

export default AppHeader;