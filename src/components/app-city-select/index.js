import React from 'react';
import './style.less';

class CitySelect extends React.PureComponent {
  constructor(props) {
    super();
    this.state = {
      isShow: false
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));
  }

  handleItemClick(item, type) {
    this.props.handelCityChange(item, type);
    this.setState(prevState => ({
      isShow: !prevState.isShow
    }));
  }

  render() {
    const { data, type, title } = this.props;
    // console.log(title);
    return (
      <div>
        <div className="sspick-content-wrapper">
          {/* <span className="sbSelector">请选择</span> */}
          <span className="sbSelector">{title ? title : '请选择'}</span>
          <span className="bottom-btn" onClick={this.handleClick}>
            >
          </span>
          {this.state.isShow ? (
            <ul>
              {data.length
                ? data.map(item => (
                    <li key={item.addrid} onClick={this.handleItemClick.bind(this, item, type)}>
                      <span>{item.addrname}</span>
                    </li>
                  ))
                : null}
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}

export default CitySelect;
