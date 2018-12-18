import React from 'react';
import AppTopBar from '../../components/app-topbar';
import Banner from '../../components/banner';
import { connect } from 'react-redux';
import { getCDetailData, setCity, getCityData2 } from './store/cdetail.redux';
import { List } from 'react-content-loader';
import Count from './components/count';
import CitySelect from '../../components/app-city-select';
import { Button } from 'antd-mobile';
import SegmentedControl from '../../components/segmented-control';
import RouterMap from './router';
import AppBotShopCar from '../../components/app-bot-shopcar'
import './style.less';

class CommodityDetail extends React.Component {
  handleCountChange = count => {
    // console.log('-------', count);
  };

  handelCityChange = (city, type) => {
    if (type) {
      this.props.setCity(type, city.addrname);
    } else {
      this.props.getCityData2(city.addrid);
      this.props.setCity(type, city.addrname);
    }
    // console.log(city,type);
  };

  render() {
    const { commodityDetailData, cityList2, city1, city2 } = this.props;
    // console.log(cityList2);
    return (
      <div>
        <AppTopBar title="爱他美三段幼儿配方奶粉" />
        <AppBotShopCar/>
        {commodityDetailData ? (
          <div style={{ backgroundColor: '#f6f4f4' }}>
            <Banner data={commodityDetailData.bannerList} />
            <div className="cdetail-content-wrapper">
              <div className="cdetail-content-one">
                <span className="price span_yellow">¥ 205.00</span>
                <span className="rprice">厂家建议零售价¥215.00</span>
              </div>
              <hr />

              <p>爱他美3段幼儿配方奶粉</p>
              <p>
                积分：可得<span className="span_yellow">205</span>积分
              </p>

              <div style={{ marginTop: 12 }}>
                <p>
                  送至
                  <span style={{ marginLeft: 20 }}>{city1 ? city1 : '请选择'}</span>
                  <span>{city2 ? city2 : '请选择'}</span>
                  <span style={{ color: '#f2622d' }}>有货</span>
                </p>
                <CitySelect
                  title={city1}
                  data={commodityDetailData.cityList}
                  handelCityChange={this.handelCityChange}
                  type={0}
                />
                <CitySelect title={city2} data={cityList2} handelCityChange={this.handelCityChange} type={1} />
              </div>
              <div style={{ marginTop: 12 }} />
              <Count handleCountChange={this.handleCountChange} />

              <div className="cdetail-2btn-wrapper">
                <Button>分享</Button>
                <Button>关注</Button>
              </div>

              <div className="cdetail-comment-wrapper">
                <div className="start-wrapper">
                  <span />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <p>
                  已有<span style={{ color: '#f2622d' }}>333423</span>人评价>
                </p>
              </div>
              <div
                className="cdetail-cdesc-wrapper"
                dangerouslySetInnerHTML={{ __html: commodityDetailData.commodityDesc }}
              />
              <SegmentedControl />
              <RouterMap />
              <div className="cdetail-bot-place"></div>
            </div>
          </div>
        ) : (
          <List />
        )}
      </div>
    );
  }

  componentDidMount() {
    this.props.getCDetailData(12);
  }
}

const mapStateToProps = state => {
  return {
    commodityDetailData: state.cdetailReducer.commodityDetailData,
    cityList2: state.cdetailReducer.cityList2,
    city1: state.cdetailReducer.city1,
    city2: state.cdetailReducer.city2
  };
};

const mapDispatchToProps = dispatch => ({
  getCDetailData(productID) {
    dispatch(getCDetailData(productID));
  },
  setCity(type, city) {
    dispatch(setCity(type, city));
  },
  getCityData2(cityId) {
    dispatch(getCityData2(cityId));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommodityDetail);
