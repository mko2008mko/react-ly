import React from 'react';
import './style.less';



class HomeCategory extends React.Component {
    render() {
        const { data } = this.props;
        return data.length ? (
            <div className="home-category-wrapper">
                <ul>
                    {data.map(item => (
                        <li key={item.id}>
                            <a href={item.linkUrl}>
                                <img src={item.imgUrl} alt=""></img>
                                <p>乐友vip</p>
                            </a>
                        </li>
                    ))}



                </ul>
            </div>
        ) : null;
    }
}

export default HomeCategory;