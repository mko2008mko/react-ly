import React from 'react';
import { Button } from 'antd-mobile';
import shopcarImg from '../../static/Scan.png';
import { connect } from 'react-redux';
import { addShopCar } from '../../pages/shop-car/store/shopcar.redux';
import './style.less';

@connect(
  state => {
    return {
      count: state.shopcarReducer.count
    };
  },
  { addShopCar }
)
class AppBotShopCar extends React.Component {
  handleAddClick = commodity => {
    this.props.addShopCar(commodity);
  };

  render() {
    const { commodity, count } = this.props;
    
    return (
      <div className="absc-wrapper">
        <div>
          <img src={shopcarImg} alt="" />
          <span>立即结算</span>
          <em>{count}</em>
        </div>
        <Button onClick={this.handleAddClick.bind(this, commodity)}>加入购物车</Button>
      </div>
    );
  }
}

export default AppBotShopCar;
