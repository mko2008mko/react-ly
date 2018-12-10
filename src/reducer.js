import { combineReducers } from "redux";
import { homeReducer } from "./pages/home/store/home.redux";
import { nfnbReducer } from "./pages/nfnb/store/nfnb.redux";
import { qqgReducer } from "./pages/qqg/store/qqg.redux";

export default combineReducers({ homeReducer, nfnbReducer, qqgReducer }); 