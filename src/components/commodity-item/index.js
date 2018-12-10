import React from "react";

export const CommodityItem = (props) => {
    const { item } = props;
    return (
        
            <li className="swiper-slide">
                <a href={item.linkUrl}>
                    <img src={item.imgUrl} alt="" />
                    <dl>
                        <dt>{item.title}</dt>
                        <dd>¥ {item.pirce}</dd>
                    </dl>
                </a>
            </li>
        
    );
}