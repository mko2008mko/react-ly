import React from "react";
import "./style.less";

class AppDownloadBar extends React.PureComponent {

    constructor(props) {
        super();
        this.state = {
            isShow: true
        }
    }

    handleDownloadClick = () => {
        console.log("handleDownloadClick....")
    }

    handleHideClick = () => {
        this.setState({ isShow: false });
    }

    render() {
        const { isShow } = this.state;
        return isShow ? (
            <div className="appdb-wrapper">
                <img src="https://leyouimage.leyou.com.cn/mleyou/mall/images/top2.png"
                    alt="" onClick={this.handleDownloadClick} />
                <div onClick={this.handleHideClick}></div>
            </div >
        ) : null;
    }

}

export default AppDownloadBar;