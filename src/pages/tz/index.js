import React from 'react';
import { connect } from 'react-redux';
import { getTZData } from "./store/tz.redux";
import { List } from "react-content-loader";
import Banner from '../../components/banner';
import { HomeCenterImg, HomeCenterMoreImg } from '../home/components/home-center-img'
import HomeCategory from '../../components/home-category';
import { RcommodityList } from "../../pages/qqg/components/r-commodity";
import {TZGreatFamilyList} from "./components/tzgreatfamily";
import "./style.less";


class ChildrenWear extends React.Component {

    render() {
        const { tzData } = this.props;
        return tzData ? (
            <div>
                <Banner data={tzData.bannerList} />
                <HomeCenterImg data={tzData.tzAdImgList} />
                <HomeCategory data={tzData.categoryList1} />
                <HomeCenterImg data={tzData.tzAdImgList2} />
                <TZGreatFamilyList data={tzData.tzgfList}/>
                <HomeCenterImg data={tzData.tzAdImgList3} />
                <RcommodityList data={tzData.tzRCommodityList} />
                
            </div>
        ) : <List />
    }

    componentDidMount() {
        this.props.getTZData();
    }
}

const mapStateToProps = state => {
    return {
        tzData: state.tzReducer.tzData
    }
}

const mapDispatchToProps = dispatch => ({
    getTZData() {
        dispatch(getTZData());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(ChildrenWear);