import React from 'react';
import Banner from '../../components/banner';
import HomeCategory from '../../components/home-category';
import { HomeCenterImg, HomeCenterMoreImg } from './components/home-center-img'
import { connect } from "react-redux";
import { getHomeData } from './store/home.redux';
import "./style.less"
import SaleTime from "./components/sale-time";
import HomeSaleCommodity from "./components/home-sale-commodity";
import HomeActiveList from "./components/home-active-list";
import { List } from 'react-content-loader';

class Home extends React.Component {

    componentDidMount() {



        this.props.getHomeData();


    }

    render() {
        // console.log(this.props)
        const { homeData } = this.props;
        return homeData ? (
            <div >

                <Banner data={homeData.bannerList} />
                <HomeCategory data={homeData.categoryList1} />
                <HomeCenterImg data={homeData.homeAdImgList} />
                <HomeCategory data={homeData.categoryList2} />
                <SaleTime time={homeData.saleTime[0].time} />
                <HomeSaleCommodity data={homeData.saleTime} />
                <HomeCenterImg data={homeData.homeAdImgList2} />
                <HomeCenterMoreImg data={homeData.homeCenterMoreImgList} />
                <HomeCenterMoreImg data={homeData.homeCenterMoreImgList2} />
                <HomeCenterImg data={homeData.homeAdImgList3} />
                <HomeCenterMoreImg data={homeData.homeCenterMoreImgList3} />
                <HomeCenterImg data={homeData.homeAdImgList4} />
                <HomeActiveList data={homeData.homeActiveList} />

            </div>
        ) : <List />;
    }
}



const mapStateToProps = state => {
    return {
        homeData: state.homeReducer.homeData
    }
}

const mapDispatchToProps = dispatch => ({
    getHomeData() {
        dispatch(getHomeData())
    }
    // getHomeData
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);






