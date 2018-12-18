import React from 'react';
import { Button } from 'antd-mobile';
import shopcarImg from '../../static/Scan.png';
import './style.less';

class AppBotShopCar extends React.Component {
  render() {
    return (
      <div className="absc-wrapper">
        <div>
          <img src={shopcarImg} alt="" />
          <span>立即结算</span>
          <em>0</em>
        </div>
        <Button>加入购物车</Button>
      </div>
    );
  }
}

export default AppBotShopCar;
