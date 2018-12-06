import React from 'react';
import Banner from '../../components/banner';
import HomeCategory from '../../components/home-category';
import { HomeCenterImg } from './components/home-center-img'
import { connect } from "react-redux";
import { getHomeData } from './store/home.redux';
import "./style.less"

class Home extends React.Component {

    componentDidMount() {
        this.props.getHomeData();
    }

    render() {
        console.log(this.props)
        const { homeData } = this.props;
        return homeData ? (
            <div>
                <Banner data={homeData.bannerList} />
                <HomeCategory data={homeData.categoryList1} />
                <HomeCenterImg data={homeData.homeAdImgList} />
                <HomeCategory data={homeData.categoryList2} />
            </div>
        ) : null;
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






