const ADD_SHOPCAR = 'ADD_SHOPCAR';
const MODIFY_COUNT = 'MODIFY_COUNT';
const initState = {
  scCommodityList: [],
  count: 0
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

export const addShopCar = commodity => {
  return {
    type: ADD_SHOPCAR,
    data: commodity
  };
};
