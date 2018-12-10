import React from "react";
import Swiper from "swiper/dist/js/swiper.js";
import 'swiper/dist/css/swiper.min.css'

export default function swiperHList(Comp) {
    // export default swiperHList = (Comp) => {
    return class WrapperComp extends React.Component {
        componentDidMount() {
            setTimeout(() => {
                let mySwiper = new Swiper('.swiper-container', {
                    slidesPerView: 'auto'
                    // spaceBetween: 20,
                })
            }, 20)

        }

        render() {
            return (

               
                    <div className='swiper-container'>
                        <Comp  {...this.props}></Comp>
                    </div>
               

            );
        }

    }
}