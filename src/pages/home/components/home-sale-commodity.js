import React from "react";
import Swiper from "swiper/dist/js/swiper.js";
import 'swiper/dist/css/swiper.min.css'

class HomeSaleCommodity extends React.Component {

    componentDidMount() {

        setTimeout(() => {
            let mySwiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto'
                // spaceBetween: 20,
            })
        }, 20)



    }

    render() {

        const { data } = this.props;
        let lilist = [];
        for (let i = 0; i < data.length; i++) {
            lilist.push(
                <li key={data[i].id} className="swiper-slide">
                    <a href={data[i].linkUrl}>
                        <img src={data[i].imgUrl} alt=""></img>
                        <p>{data[i].title}</p>
                        <div>
                            <span>¥{data[i].pirce}</span>
                            <span className="rob">秒</span>
                        </div>
                    </a>
                </li>

            )
        }
        return (

            <div className="home-sale-commodity-wrapper">
                <div className='swiper-container'>
                    <ul className='swiper-wrapper'>
                        {lilist}

                    </ul>
                </div>

            </div>
        )
    }
}

export default HomeSaleCommodity;