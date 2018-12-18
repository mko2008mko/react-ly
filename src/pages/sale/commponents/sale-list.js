import React from 'react';

class SaleList extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="sale-list-wrapper">
        <ul>
          {data.length
            ? data.map(item => (
                <li key={item.id}>
                  <img src={item.imgUrl} alt="" />
                  <div>
                    <p>{item.title}</p>
                    <span>¥：{item.price}</span>
                  </div>
                </li>
              ))
            : null}
        </ul>
      </div>
    );
  }
}
export default SaleList;
