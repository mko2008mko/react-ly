import React from 'react';
import './style.less';



class HomeCategory extends React.Component {
    render() {
        const { data } = this.props;
        const { fstyle } = this.props;
        return data.length ? (
            <div className="home-category-wrapper">
                <ul>
                    {data.map(item => (
                        <li key={item.id} style={fstyle}>
                            <a href={item.linkUrl}>
                                <img src={item.imgUrl} alt=""></img>
                                <p>{item.title}</p>
                            </a>
                        </li>
                    ))}



                </ul>
            </div>
        ) : null;
    }
}

export default HomeCategory;