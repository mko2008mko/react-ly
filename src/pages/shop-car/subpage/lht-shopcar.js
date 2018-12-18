import React from 'react';
import { ShopCarIsNull } from '../components/shopcar-comp';
import { Button } from 'antd-mobile';
import { LYXZHFllowItem } from '../components/shopcar-comp';

class LHTShopCar extends React.Component{
    render(){
        return(
            <div>
                <LYXZHFllowItem/>
                <ShopCarIsNull />
                <Button type="ghost">去乐海淘逛逛！</Button>
            </div>
        )
    }
}

export default LHTShopCar;