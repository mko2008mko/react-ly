import React from 'react';

class SaleCountDown extends React.Component {
  constructor(props) {
    super();
    this.state = {
      // day:0,
      hour: 0,
      minute: 0,
      second: 0
    };
  
  }

  componentDidMount() {
    let myDate = new Date();
    //   console.log(myDate.getFullYear(),myDate.getMonth(),myDate.getDate(),myDate.toLocaleDateString())
    // console.log(myDate);
    // console.log(this.props.time);
    if (this.props.time != null) {
      let endtime;
      if (this.props.time === 8) {
        endtime = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate() + 1, this.props.time);
      } else {
        endtime = new Date(myDate.getFullYear(), myDate.getMonth(), myDate.getDate(), this.props.time);
      }
      // console.log(endtime);
      this.countFun(endtime);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }



  countFun = time => {
    let end_time = time.getTime(),
      sys_second = end_time - new Date().getTime();
    this.timer = setInterval(() => {
      //防止倒计时出现负数
      if (sys_second > 1000) {
        sys_second -= 1000;
        let day = Math.floor(sys_second / 1000 / 3600 / 24);
        let hour = Math.floor((sys_second / 1000 / 3600) % 24);
        let minute = Math.floor((sys_second / 1000 / 60) % 60);
        let second = Math.floor((sys_second / 1000) % 60);
        this.setState({
          day: day,
          hour: hour < 10 ? '0' + hour : hour,
          minute: minute < 10 ? '0' + minute : minute,
          second: second < 10 ? '0' + second : second
        });
      } else {
        clearInterval(this.timer);
        //倒计时结束时触发父组件的方法
        //this.props.timeEnd();
      }
    }, 1000);
  };

  render() {
    return (
      <div className="salecountdown-wrapper">
        <span>距离结束: </span>
        <p>
          <span>{this.state.hour}</span>:<span>{this.state.minute}</span>:<span>{this.state.second}</span>
        </p>
      </div>
    );
  }
}

export default SaleCountDown;
