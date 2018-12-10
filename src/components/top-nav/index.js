import React from 'react';
import { Tabs } from 'antd-mobile';
import { withRouter } from 'react-router-dom';

import "./style.less";
// @withRouter
class TopNav extends React.Component {

    constructor(props) {
        super();

    }

    componentDidMount() {
        const wrapper = this.refs.wrapper;
        console.log(wrapper)
        let timeId;
        window.addEventListener('scroll', () => {
            if (timeId) {
                clearTimeout(timeId);
            }

            timeId = setTimeout(() => {
                let btop = document.body.scrollTop || document.documentElement.scrollTop;
                const titleTop = wrapper.offsetTop

                console.log(btop, titleTop);

                if (btop > titleTop) {
                    wrapper.className = "clearfix fix";
                } else {
                    wrapper.className = "clearfix";
                }
            }, 8);

            // let btop = document.body.scrollTop || document.documentElement.scrollTop;
            // const titleTop = wrapper.offsetTop

            // console.log(btop, titleTop);

            // if (btop > titleTop) {
            //     wrapper.className = "clearfix fix";
            // } else {
            //     wrapper.className = "clearfix";
            // }

        }, false)
    }

    handlerTabClick = (tab, index) => {
        // console.log(tab, index);
        switch (index) {
            case 0:
                this.props.history.push('/')
                break;
            case 1:
                this.props.history.push('/ba')
                break;
            case 2:
                this.props.history.push('/gp')
                break;
            case 3:
                this.props.history.push('/cw')
                break;
            case 4:
                this.props.history.push('/fd')
                break;
            case 5:
                this.props.history.push('/a')
                break;

            default:
                break;
        }
    }


    render() {
        // console.log(this.props);
        const tabs = [
            { title: '首页' },
            { title: '奶粉尿布' },
            { title: '全球购' },
            { title: '童装' },
            { title: '食品' },
            { title: '用品' },
            { title: '玩具' },
            { title: '车床椅' },
            { title: '运营服饰' },
        ];

        return (
            <nav ref="wrapper" style={{ zIndex: 2 }}>
                <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={6} />}
                    tabBarUnderlineStyle={{ height: '0.05rem', backgroundColor: '#ffb000', border: 'none' }} tabBarActiveTextColor={'#ffb000'}
                    tabBarInactiveTextColor={'#000'} tabBarTextStyle={{ fontSize: '0.26rem' }}
                    onTabClick={this.handlerTabClick}
                >

                </Tabs>
            </nav>
        )
    }
}

export default TopNav = withRouter(TopNav);