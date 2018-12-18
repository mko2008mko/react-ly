import axios from 'axios';

const GET_SALE_COMMODITY_DATA = 'GET_SALE_COMMODITY_DATA';
const initState = {
  saleData: null
};

export const salecommodityReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SALE_COMMODITY_DATA:
      return { ...state, saleData: action.data };

    default:
      return state;
  }
};

const getSCDSuccess = data => {
  return {
    type: GET_SALE_COMMODITY_DATA,
    data: data
  };
};

export const getSaleListData = () => {
  return dispatch => {
    axios
      .get('/api/salelist.json')
      .then(res => {
        dispatch(getSCDSuccess(res.data.data));
      })
      .catch(e => {});
  };
};
