import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ImageDesc from '../subpage/image-desc';
import AfterSale from '../subpage/after-sale';
import HowBuy from '../subpage/how-buy';

class RouterMap extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/commodityDetail/aftersale" component={AfterSale} />
        <Route path="/commodityDetail/howbuy" component={HowBuy} />
        <Route path="/commodityDetail/" component={ImageDesc} />
      </Switch>
    );
  }
}

export default RouterMap;
