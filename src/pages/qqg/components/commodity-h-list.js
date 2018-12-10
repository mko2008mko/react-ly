import React from "react";
import swiperHList from "../../../components/swiper-h-contain/swiper-h-hoc";
import { CommodityItem } from "../../../components/commodity-item";

// @swiperHList

const CommodityHList = (props) => {
    const { data } = props;
    return (
        <ul className="commodity-h-list-wrapper swiper-wrapper">
            {
                data.length ? data.map(item => (
                    <CommodityItem item={item}  key={item.id}/>
                )) : null
            }

        </ul>
    );
}

export default swiperHList(CommodityHList)