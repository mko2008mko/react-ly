import React from 'react';
import { Link } from 'react-router-dom';

class SaleTime extends React.Component {
  render() {
    const data = ['8:00', '12:00', '16:00', '20:00'];

    let { time } = this.props;

    let liList = [];
    for (let i = 0; i < 4; i++) {
      if (i === 0) {
        liList.push(
          <li className="active" key={time}>
            {data[time]}
            <br />
            秒杀中
          </li>
        );
      } else {
        if (time <= 3) {
          liList.push(
            <li key={time}>
              {data[time]}
              <br />
              即将开始
            </li>
          );
        } else {
          liList.push(
            <li key={time}>
              明天{data[time - 4]}
              <br />
              即将开始
            </li>
          );
        }
      }

      time++;
    }

    // console.log(time);

    return (
      <div className="sale-keill-warpper" style={this.props.style}>
        <Link to={`/saleDetail`}>
          <ul>{liList}</ul>
        </Link>
      </div>
    );
  }
}

export default SaleTime;
