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

        </div >
    ) : null;
}

export const HomeCenterMoreImg = (props) => {
    const { data } = props;
    const { fstyle } = props;
    return data.length ? (
        <div className="home-center-moreimg-wrapper" style={fstyle}>
            {data.map(item => (
                <a href={item.linkUrl} key={item.id}>
                    <img alt="" src={item.imgUrl} />
                </a>
            ))}

        </div>
    ) : null;
}

// export const HomeSaleCommodity = (props) => {
//     const { data } = props;
//     let lilist = [];
//     for (let i = 0; i < data.length; i++) {
//         lilist.push(
//             <li key={data[i].id}>
//                 <img src={data[i].imgUrl} alt=""></img>
//                 <p>{data[i].title}</p>
//                 <div>
//                     <span>¥{data[i].pirce}</span>
//                     <span className="rob">秒</span>
//                 </div>
//             </li>

//         )
//     }


//     return (
//         <div className="home-sale-commodity-wrapper">

//                 <ul>
//                     {lilist}

//                 </ul>

//         </div>
//     );
// }


