import React from 'react';
import { PageContentSeparator } from "../../components/page-conten-eparator";
import HomeCategory from '../../components/home-category';
import { getQQGData } from "./store/qqg.redux";
import { connect } from "react-redux";
import { List } from "react-content-loader";
import CommodityHList  from "./components/commodity-h-list";
import HomeActiveList from "../home/components/home-active-list";
import {RcommodityList} from "./components/r-commodity"
import "./style.less"


class GlobalPurchase extends React.Component {

    componentDidMount() {
        this.props.getQQGData();
    }

    render() {
        const { qqgData } = this.props;
        return qqgData ? (
            <div>
                <HomeCategory data={qqgData.categoryList1} />
                <PageContentSeparator title="每周特价" />
                <CommodityHList data={qqgData.commodityList}/>
                <PageContentSeparator title="热销推荐" />
                <CommodityHList data={qqgData.commodityList}/>
                <PageContentSeparator title="精选活动" />
                <HomeActiveList data={qqgData.qqgActiveList}/>
                <PageContentSeparator title="更多推荐" />
                <RcommodityList data={qqgData.qqgRCommodityList}/>
            </div>
        ) : <List />
    }
}

const mapStateToProps = state => {
    return {
        qqgData: state.qqgReducer.qqgData
    }
}

const mapDisptachToProps = dispatch => ({
    getQQGData() {
        dispatch(getQQGData());
    }
})

export default connect(mapStateToProps, mapDisptachToProps)(GlobalPurchase);