import React from 'react';
import { connect } from "react-redux";
import { getSPData } from "./store/sp.redux";
import { List } from "react-content-loader";
import Banner from "../../components/banner"
import HomeCategory from '../../components/home-category';
import { PageContentSeparator } from "../../components/page-conten-eparator";
import { RcommodityList } from "../../pages/qqg/components/r-commodity";
import CommodityHList from "../qqg/components/commodity-h-list";
import HomeActiveList from "../home/components/home-active-list";

@connect(
    state => state.spReducer,
    { getSPData }
)
class Food extends React.Component {
    render() {
        const { spData } = this.props;
        const hcImg = {
            width: '100%',
            height: '88%',
            borderRadius: 'none',
            border: 'none'
        }

        return spData ? (
            <div>
                <Banner data={spData.bannerList} />
                <HomeCategory data={spData.categoryImgList} imgStyle={hcImg} />
                <PageContentSeparator title="品牌专享" />
                <HomeCategory data={spData.categoryList} />
                <PageContentSeparator title="爆款推荐" />
                <CommodityHList data={spData.spRCommodityList}/>
                <PageContentSeparator title="大牌钜惠" />
                <HomeActiveList data={spData.spActiveList}/>
                <PageContentSeparator title="猜你喜欢" />
                <RcommodityList data={spData.spRCommodityList} />
            </div>
        ) : <List />;
    }

    componentDidMount() {
        this.props.getSPData();
    }
}

export default Food;