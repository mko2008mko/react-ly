const ADD_SHOPCAR = 'ADD_SHOPCAR';
const MODIFY_COUNT = 'MODIFY_COUNT';
const MODIFY_C_SIZE = 'MODIFY_C_SIZE';
const CHANGE_CHECK = 'CHANGE_CHECK';
const initState = {
  scCommodityList: [
    {
      id: 233,
      imgUrl: 'http://leyouimage.leyou.com.cn/images_newdb/f2/9e/f29ee368c680d576e1bb64a39e5ac481_360_360.JPG',
      linkUrl: 'http://app.leyou.com.cn/activity/vipCheck',
      title: '歌瑞家A类圣诞系列灰男夹裤',
      pirce: '89.0',
      size: 3,
      isCheck: false
    }
  ],
  count: 1,
  totalPrice: 0
};

export const shopcarReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_SHOPCAR:
      //   return { ...state, scCommodityList: state.scCommodityList.push(action.data), count: state.count++ };
      return {
        ...state,
        ...commodityIsExist(state.scCommodityList, state.count, action.data)
      };
    case MODIFY_COUNT:
      return { ...state, count: action.data };
    case CHANGE_CHECK:
      return {
        ...state,
        scCommodityList: state.scCommodityList.map(item => {
          if (item.id === action.data.id) {
            item.isCheck = action.data.isCheck;
          }
          return item;
        }),
        totalPrice: state.scCommodityList.reduce((result, curr) => {
          if (curr.isCheck) {
            // console.log(curr.size, curr.pirce);
            result += curr.size * parseFloat(curr.pirce);
          }
          return result;
        }, 0)
      };
    case MODIFY_C_SIZE:
      return {
        ...state,
        scCommodityList: state.scCommodityList.map(item => {
          if (item.id === action.data.id) {
            item.size = action.data.size;
          }
          return item;
        }),
        totalPrice: state.scCommodityList.reduce((result, curr) => {
          if (curr.isCheck) {
            // console.log(curr.size, curr.pirce);
            result += curr.size * parseFloat(curr.pirce);
          }
          return result;
        }, 0)
      };
    default:
      return state;
  }
};

const commodityIsExist = (commoditylist, count, addcommodity) => {
  if (!commoditylist.length) {
    commoditylist.push({ ...addcommodity });
    // count++;
    return { scCommodityList: commoditylist, count: 1 };
  }
  //   console.log(test(commoditylist, count, addcommodity));
  for (let item of commoditylist) {
    if (item.id === addcommodity.id) {
      // console.log(addcommodity.size)
      item.size += addcommodity.size;
      return { scCommodityList: commoditylist, count: count };
    } else {
      //   commoditylist.push({ ...{}, ...addcommodity });

      commoditylist.push(addcommodity);
      //   count++;
      return { scCommodityList: commoditylist, count: count + 1 };
    }
  }
};

export const addShopCar = commodity => {
  return {
    type: ADD_SHOPCAR,
    data: commodity
  };
};

export const changeShopCheck = commodity => {
  return {
    type: CHANGE_CHECK,
    data: commodity
  };
};

export const modifyCommoditySize = commodity => {
  return {
    type: MODIFY_C_SIZE,
    data: commodity
  };
};

// const test = (commoditylist, count, addcommodity) => {
//  let v = commoditylist.(item => {

//     if (item.id === addcommodity.id) {
//       // console.log(addcommodity.size)
//       item.size += addcommodity.size;
//       console.log('-----', item.size);
//       return true;
//     } else {
//       //   commoditylist.push({ ...{}, ...addcommodity });
//       commoditylist.push(addcommodity);
//       return { scCommodityList: commoditylist, count: count++ };
//     }
//   });
//   console.log(v)
//   return v;
// };

// commoditylist.filter(item => {
//     if (item.id === addcommodity.id) {
//       // console.log(addcommodity.size)
//       item.size += addcommodity.size;
//       console.log(item.size)
//       return { scCommodityList: commoditylist, count: 10, ss: 'sss' };
//     } else {
//       //   commoditylist.push({ ...{}, ...addcommodity });

//       commoditylist.push(addcommodity);
//       return { scCommodityList: commoditylist, count: count++ };
//     }
//   });

// function clone(origin) {
//   return JSON.parse(JSON.stringify(origin));
// }
