import { combineReducers } from "redux";
import { homeReducer } from "./pages/home/store/home.redux";
import { nfnbReducer } from "./pages/nfnb/store/nfnb.redux";
import { qqgReducer } from "./pages/qqg/store/qqg.redux";
import { tzReducer } from "./pages/tz/store/tz.redux";
import { spReducer } from "./pages/sp/store/sp.redux";
import { ypReducer } from "./pages/yp/store/yp.redux";
import { userReducer } from "./pages/login/store/login.redux";

export default combineReducers({ homeReducer, nfnbReducer, qqgReducer, tzReducer, spReducer, ypReducer,userReducer }); 