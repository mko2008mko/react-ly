import React from "react";
import { HomeCenterImg } from "./home-center-img";
import HomeSaleCommodity from "./home-sale-commodity";

class HomeActiveList extends React.Component {
    render() {
        const { data } = this.props;
        // console.log(data);
        return data.length ? (
            <div>
                {data.map(item => (
                    <div key={item.id}>
                        <HomeCenterImg data={item.adImg} />
                        <HomeSaleCommodity data={item.adList} />
                    </div>
                ))}

            </div>
        ) : null;
    }
}

export default HomeActiveList;