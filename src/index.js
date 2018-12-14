import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './rest.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Login from './pages/login';
import Register from './pages/register';
import CommodityDetail from './pages/commodity-detail';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
       
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/commodityDetail" component={CommodityDetail} />
        {/* <Route exact path="/commodityDetail/imgdesc" component={CommodityDetail} />
        <Route exact path="/commodityDetail/aftersale" component={CommodityDetail} /> */}
         <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
