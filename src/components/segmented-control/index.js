import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.less';

class SegmentedControl extends React.Component {
  render() {
    return (
      <div className="sc-wrapper">
        <ul>
          <li>
            <NavLink to={`/commodityDetail`} activeClassName="selected" exact={true}>
              图文详情
            </NavLink>
          </li>
          <li>
            <NavLink to={`/commodityDetail/aftersale`} activeClassName="selected">
              售后服务
            </NavLink>
          </li>
          <li>
            <NavLink to={`/commodityDetail/howbuy`} activeClassName="selected">
              如何购买
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default SegmentedControl;
