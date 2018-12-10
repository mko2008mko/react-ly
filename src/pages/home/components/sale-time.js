import React from 'react';

class SaleTime extends React.Component {
    render() {

        const data = ['8:00', '12:00', '16:00', '20:00']

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
                )
            } else {
                if (time <= 3) {
                    liList.push(
                        <li key={time}>
                            {data[time]}
                            <br />
                            即将开始
                    </li>
                    )
                } else {
                    liList.push(
                        <li key={time}>
                            明天{data[time - 4]}
                            <br />
                            即将开始
                    </li>
                    )
                }
            }

            time++;


        }


        // console.log(time);

        return (
            <div className="sale-keill-warpper">
                <ul>
                    {liList}
                    {/* <li className="active">
                        08:00
                        <br />
                        秒杀中
                    </li>
                    <li>
                        12:00
                        <br />
                        秒杀中
                    </li>
                    <li>
                        16:00
                        <br />
                        秒杀中
                    </li>
                    <li>
                        20:00
                        <br />
                        秒杀中
                    </li> */}
                </ul>
            </div>
        )

    }
}

export default SaleTime;