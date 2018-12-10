import React from "react";
import imgLeftIcon from "../../static/index_title_left.png";
import imgRigthIcon from "../../static/index_title_right.png";
import "./style.less";

export const PageContentSeparator = (props) => {
    return (
        <div className="pcs-wrapper">
            <img  src={imgLeftIcon} alt="" />
            <span>
                {props.title}
            </span>
            <img  src={imgRigthIcon} alt="" />
        </div>
    );
}