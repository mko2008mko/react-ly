import React from 'react';
import AppTopBar from '../../components/app-topbar';
import SaleTime from '../home/components/sale-time';
import SaleCountDown from './commponents/count-down';
import { connect } from 'react-redux';
import { List } from 'react-content-loader';
import { getSaleListData } from './store/salecommodity.redux';
import SaleList from './commponents/sale-list';


import './style.less';

@connect(
  state => {
    return {
      homeData: state.homeReducer.homeData,
      saleData: state.salecommodityReducer.saleData
    };
  },
  { getSaleListData }
)
class SaleDetail extends React.Component {
  componentDidMount() {
    this.props.getSaleListData();
  }

  render() {
    const { homeData, saleData } = this.props;
    console.log(saleData);
    const data = [12, 16, 20, 8];
    // const time = homeData.saleTime[0].time;
    console.log(homeData);
    return (
      <div>
        <AppTopBar title="秒杀" />
        {homeData ? (
          <div>
            <SaleTime time={homeData.saleTime[0].time} style={{ background: '#fff' }} />
            <div className="sale-countdown-three">
              <span>正在抢购</span>
              <SaleCountDown time={data[homeData.saleTime[0].time]} />
            </div>
          </div>
        ) : (
          <List />
        )}
        {saleData ? <SaleList data={saleData.saleList} /> : <List />}
      </div>
    );
  }
}

export default SaleDetail;
