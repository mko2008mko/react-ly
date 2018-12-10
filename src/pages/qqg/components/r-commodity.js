import React from "react";
import { CommodityItem } from "../../../components/commodity-item";

export const RcommodityList = (props) => {
    const { data } = props;
    console.log(data);
    return data.length ? (
        <ul className="commodity-r-list-wrapper">
             {
                data.length ? data.map(item => (
                    <CommodityItem item={item}  key={item.id}/>
                )) : null
            }
        </ul>
    ) : null;
}