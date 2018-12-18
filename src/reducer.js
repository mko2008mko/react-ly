import { combineReducers } from 'redux';
import { homeReducer } from './pages/home/store/home.redux';
import { nfnbReducer } from './pages/nfnb/store/nfnb.redux';
import { qqgReducer } from './pages/qqg/store/qqg.redux';
import { tzReducer } from './pages/tz/store/tz.redux';
import { spReducer } from './pages/sp/store/sp.redux';
import { ypReducer } from './pages/yp/store/yp.redux';
import { userReducer } from './pages/login/store/login.redux';
import { cdetailReducer } from './pages/commodity-detail/store/cdetail.redux';
import { salecommodityReducer } from './pages/sale/store/salecommodity.redux';
import { shopcarReducer } from './pages/shop-car/store/shopcar.redux';

export default combineReducers({
  homeReducer,
  nfnbReducer,
  qqgReducer,
  tzReducer,
  spReducer,
  ypReducer,
  userReducer,
  cdetailReducer,
  salecommodityReducer,
  shopcarReducer
});
