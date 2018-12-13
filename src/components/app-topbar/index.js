import React from "react";
import "./style.less";
import backImg from "../../static/back.png";
import menuImg from "../../static/menu.png";
import { withRouter } from "react-router-dom";

class AppTopBar extends React.Component {

    handleBackClick = ()=>{
        console.log(this.props.history)
        // this.props.history.goBack();
        this.props.history.go(-1);
    }

    render() {
        return (
            <div className="app-topbar-wrapper">
                <img src={backImg} alt="" onClick={this.handleBackClick}/>
                <span>{this.props.title}</span>
                <img className="right" src={menuImg} alt="" />
            </div>
        )
    }
}

export default withRouter(AppTopBar);