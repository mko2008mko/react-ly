import React from 'react';
import './style.less';

export const ShopCarIsNull = () => {
  return (
    <div className="shopcarisnull-wrapper">
      <img src="http://m.leyou.com.cn/leyou.m.web/content/images/nullcar.png" alt="" />
      <p>购物车还空着呢，快去添加哦</p>
    </div>
  );
};

export const LYXZHFllowItem = () => {
  return (
    <div className="xzh-follow-wrapper">
      <div className="xzh-left-wrapper">
        <img src="http://leyouimage5.leyou.com.cn/mleyou/single/images/mlogo.png" alt="" />
        <div>
          <h3>
            乐友商城<span>熊掌号</span>
          </h3>
          <p>中国妈妈信赖的母婴正品商城</p>
        </div>
      </div>
      <span className="xzh-right-wrapper">关注</span>
    </div>
  );
};
