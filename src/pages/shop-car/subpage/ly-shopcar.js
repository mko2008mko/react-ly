import React from 'react';
import { ShopCarIsNull } from '../components/shopcar-comp';
import { Button } from 'antd-mobile';

class LYShopCar extends React.Component {
  render() {
    return (
      <div>
        <ShopCarIsNull />
        <div className="ly-shopcar-2btn-wrapper">
          <Button type="ghost">返回上一页</Button>
          <Button type="ghost">去首页逛逛</Button>
        </div>
      </div>
    );
  }
}

export default LYShopCar;
