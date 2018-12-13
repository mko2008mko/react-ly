import React from 'react';
import { connect } from "react-redux";
import { getYPData } from "./store/yp.redux";
import Banner from "../../components/banner"
import HomeCategory from '../../components/home-category';
import { List } from "react-content-loader";
import { PageContentSeparator } from "../../components/page-conten-eparator";
import CommodityHList from "../qqg/components/commodity-h-list";
import HomeActiveList from "../home/components/home-active-list";
import { RcommodityList } from "../../pages/qqg/components/r-commodity";

class Article extends React.Component {
    render() {
        const { ypData } = this.props;
        const hcImg = {
            width: '100%',
            height: '88%',
            borderRadius: 'none',
            border: 'none'
        }
        return ypData ? (
            <div>
                <Banner data={ypData.bannerList} />
                <HomeCategory data={ypData.categoryImgList} imgStyle={hcImg} />
                <PageContentSeparator title="爆款推荐" />
                <CommodityHList data={ypData.ypRCommodityList}/>
                <PageContentSeparator title="大牌钜惠" />
                <HomeActiveList data={ypData.ypActiveList}/>
                <PageContentSeparator title="猜你喜欢" />
                <RcommodityList data={ypData.ypRCommodityList} />
            </div>
        ) : <List />;
    }

    componentDidMount(){
        this.props.getYPData();
    }
}

const mapStateToProps = state => {
    return {
        ypData: state.ypReducer.ypData
    }
}

const mapDispatchToProps = dispatch => ({
    getYPData() {
        dispatch(getYPData());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Article);