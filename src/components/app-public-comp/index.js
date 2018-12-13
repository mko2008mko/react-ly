import React from 'react';
import { Link } from 'react-router-dom';
import './style.less';

export const AppDownloadItem = () => {
  return (
    <div className="download-wrapper clear">
      <span>
        <img src="http://leyouimage.leyou.com.cn/mleyou/m_zy/logo.png" alt="" />
      </span>
      <span className="download-text">下载乐友客户端，抢购商品更简单！</span>
      <a href="#;">
        <img src="http://leyouimage.leyou.com.cn/mleyou/m_zy/download.png" alt="" />
      </a>
    </div>
  );
};

export const TopLefNavPop = () => {
  return (
    <div className="tf-nav-pop-wrapper">
      <ul>
        <li>
          <Link to={`/`}>
            <span>首页</span>
          </Link>
        </li>
        <li>
          <span>购物车</span>
        </li>
        <li>
          <span>我的乐友</span>
        </li>
      </ul>
      <div className="dd" />
    </div>
  );
};
