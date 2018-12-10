import React from "react";
import swiperHList from "../../../components/swiper-h-contain/swiper-h-hoc"; 

@swiperHList
class HomeSaleCommodity extends React.Component {

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
  
                    <ul className='home-sale-commodity-wrapper swiper-wrapper'>
                        {lilist}

                    </ul>
               
        )
    }
}

export default HomeSaleCommodity;