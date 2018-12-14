import React from 'react';
import ImgTitle from '../../../static/titleicon.png';
import { connect } from 'react-redux';
import { List } from 'react-content-loader';
import './style.less';

@connect(
  state => state.cdetailReducer,
  null
)
class ImageDesc extends React.Component {
  render() {
    const { commodityDetailData } = this.props;
    let imglist = [];
    if (commodityDetailData) {
      imglist = commodityDetailData.imgDescList;
    } else {
      return null;
    }
    return (
      <div className="cdetail-imgdesc-wrapper">
        <h3>
          <img src={ImgTitle} alt="" />
        </h3>

        <ul>
          {imglist.length ? (
            imglist.map(item => (
              <li key={item.id}>
                <img src={item.imgUrl} alt="" />
              </li>
            ))
          ) : (
            <List />
          )}
        </ul>
      </div>
    );
  }
}

export default ImageDesc;
