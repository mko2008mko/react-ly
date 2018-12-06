import React from "react";


export const HomeCenterImg = (props) => {
    const { data } = props;
    return data.length ? (
        <div style={{ background: '#fff' }}>
            {data.map(item => (
                <div className="imgone" key={item.id}>
                    <a href={item.linkUrl}>
                        <img src={item.imgUrl} alt="" />
                    </a>
                </div>
            ))}

            {/* <div className="imgone">
                <a href="https://www.baidu.com">
                    <img src="http://leyoutest1.oss-cn-beijing.aliyuncs.com/2018/12/04/1543925956471460.jpg" alt="" />
                </a>
            </div>

            <div className="imgone">
                <a href="https://www.baidu.com">
                    <img src="http://leyoutest1.oss-cn-beijing.aliyuncs.com/2018/11/30/1543544186675180.jpg" alt="" />
                </a>
            </div> */}
        </div >
    ) : null;
}

export const HomeCenterCategory = (props) => {
    return (
        <div>
            <ul>

            </ul>
        </div>
    );
}


