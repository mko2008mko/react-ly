import React from 'react';
import { Carousel } from 'antd-mobile';
import "./style.less";

class Banner extends React.PureComponent {
    render() {
        const { data } = this.props;
        console.log(data);
        return (
            <div>
                <Carousel
                    autoplay={true}
                    infinite
                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                // afterChange={index => console.log('slide to', index)}
                >

                    {data.length ? data.map(item => (
                        <img
                            key={item.id}
                            src={item.imgUrl}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                            }}
                        />
                    ))
                        : null
                    }

                    {/* <img
                        src={`http://leyoutest1.oss-cn-beijing.aliyuncs.com/2018/11/30/1543573013401899.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />
                    <img
                        src={`http://leyoutest1.oss-cn-beijing.aliyuncs.com/2018/12/03/1543800084698824.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    />

                    <img
                        src={`http://leyoutest1.oss-cn-beijing.aliyuncs.com/2018/12/03/1543800084698824.jpg`}
                        alt=""
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                        }}
                    /> */}



                </Carousel>
            </div>
        )
    }
}

export default Banner;