import React from 'react';
import { connect } from "react-redux";
import { getNFNBData } from "./store/nfnb.redux";
import { HomeCenterImg, HomeCenterMoreImg } from '../home/components/home-center-img'
import HomeCategory from "../../components/home-category";
import HomeActiveList from "../home/components/home-active-list";


class BabyArticle extends React.Component {

    componentDidMount() {

        this.props.getNFNBData();

    }

    render() {

        const { nfnbData } = this.props;
        return nfnbData ? (
            <div>
                <HomeCenterImg data={nfnbData.nfnbAdImgList} />
                <HomeCenterMoreImg data={nfnbData.nfnbCenterMoreImg} />
                <HomeCenterImg data={nfnbData.nfnbAdImgList2} />
                {
                    nfnbData.nfnbCenterMoreImgList.length ?
                        nfnbData.nfnbCenterMoreImgList.map(item => (
                            <HomeCenterMoreImg key={item.id} data={item.item} fstyle={{ marginBottom: 1 }} />
                        )) : null
                }
                <HomeCenterImg data={nfnbData.nfnbAdImgList3} />
                {
                    nfnbData.nfnbCenterMoreImgList2.length ?
                        nfnbData.nfnbCenterMoreImgList2.map(item => (
                            <HomeCenterMoreImg key={item.id} data={item.item} fstyle={{ marginBottom: 1 }} />
                        )) : null
                }
                <HomeCategory data={nfnbData.categoryList1} fstyle={{ width: "20%" }} />
                <HomeActiveList data={nfnbData.nfnbActiveList}/>
            </div>
        ) : null;
    }
}

const mapStateToProps = state => {
    return {
        nfnbData: state.nfnbReducer.nfnbData
    }
}

const mapDispatchToProps = dispatch => ({
    getNFNBData() {
        dispatch(getNFNBData());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(BabyArticle);