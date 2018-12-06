import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import BabyArticle from "../pages/nfnb";
import GlobalPurchase from "../pages/qqg";
import Food from "../pages/sp";
import ChildrenWear from "../pages/tz";
import Article from "../pages/yp";




class RouterMap extends React.Component {

    render() {
        return (
            // <BrowserRouter>

            <Switch>

                <Route exact path="/" component={Home} />
                <Route path="/ba" component={BabyArticle} />
                <Route path="/gp" component={GlobalPurchase} />
                <Route path="/fd" component={Food} />
                <Route path="/cw" component={ChildrenWear} />
                <Route path="/a" component={Article} />

            </Switch>

            // </BrowserRouter>

        )
    }
}

export default RouterMap;