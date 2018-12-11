import React from "react";

export const TZGreatFamilyList = (props) => {
    const { data } = props;
    // console.log(data);
    return data.length ? (
        <ul className="tz-gf-list-wrapper">
            {
                data.length ? data.map(item => (
                    <li key={item.id}>
                        <a href={item.linkUrl}>
                            <img src={item.imgUrl} alt="" />
                        </a>
                    </li>
                )) : null
            }
        </ul>
    ) : null;
}