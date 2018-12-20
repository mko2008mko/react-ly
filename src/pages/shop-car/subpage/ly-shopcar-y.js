import React from 'react';
import { ShopCarIsLoginDesc, DiscountDesc } from '../components/shopcar-comp';
import Count from '../../commodity-detail/components/count';
import { Checkbox } from 'antd-mobile';
import { connect } from 'react-redux';
import { changeShopCheck, modifyCommoditySize } from '../store/shopcar.redux';
const CheckboxItem = Checkbox.CheckboxItem;

@connect(
  state => state.shopcarReducer,
  { changeShopCheck, modifyCommoditySize }
)
class LYShopCarY extends React.Component {
  handleCheckChange = (commodity, e) => {
    // console.log(commodity,e)
    commodity.isCheck = e.target.checked;
    this.props.changeShopCheck(commodity);
  };

  handleCountChange = (commodity, size) => {
    // console.log(commodity);
    // console.log(size);
    commodity.size = size;
    this.props.modifyCommoditySize(commodity);
  };

  render() {
    const { scCommodityList, count } = this.props;
    // console.log(data);
    return (
      <div>
        <ShopCarIsLoginDesc />
        {scCommodityList.length
          ? scCommodityList.map(item => (
              <CheckboxItem checked={item.isCheck} onChange={this.handleCheckChange.bind(this, item)} key={item.id}>
                <div className="shopcar-checkitem-wrapper">
                  <img className="shopcar-checkitem-cimg" src={item.imgUrl} alt="" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>¥ {item.pirce}</p>
                    <Count default={item.size} handleCountChange={this.handleCountChange.bind(this, item)} />
                    <p>删除</p>
                  </div>
                </div>
              </CheckboxItem>
            ))
          : null}

        <DiscountDesc />
      </div>
    );
  }
}

export default LYShopCarY;

{
  /* <CheckboxItem onChange={() => this.onChange()}>
<div className="shopcar-checkitem-wrapper">
  <img className="shopcar-checkitem-cimg" src="http://leyouimage.leyou.com.cn/images_newdb/30/73/30734dfd3841d04da9724964031aa67d_200_200.JPG" alt="" />
  <div>
    <h3>爱他美3段幼儿配方奶粉800g桶</h3>
    <p>¥ 200.00</p>
    <Count />
    <p>删除</p>
  </div>
</div>
</CheckboxItem> */
}
