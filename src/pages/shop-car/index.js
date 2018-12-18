import React from 'react';
import AppTopBar from '../../components/app-topbar';
import { WingBlank, SegmentedControl } from 'antd-mobile';
import LYShopCar from './subpage/ly-shopcar';
import LHTShopCar from './subpage/lht-shopcar';
import './style.less';

class ShopCar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedIndex: 0,
      title: '乐友购物车'
    };
  }

  onChange = e => {
    this.setState({
      selectedIndex: e.nativeEvent.selectedSegmentIndex,
      title: e.nativeEvent.selectedSegmentIndex ? '乐海淘购物车' : '乐友购物车'
    });
  };
  render() {
    return (
      <div>
        <AppTopBar title={this.state.title} />
        <div className="shop-car-content-wrapper">
          <WingBlank size="lg" className="sc-example">
            <SegmentedControl values={['乐友商品', '乐海淘商品']} tintColor={'#f2622d'} onChange={this.onChange} />
            {this.state.selectedIndex ? <LHTShopCar /> : <LYShopCar />}
          </WingBlank>
        </div>
      </div>
    );
  }
}

export default ShopCar;
