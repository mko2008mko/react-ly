import axios from 'axios';

const GET_DETAIL_DATA = 'GET_DETAIL_DATA';
const GET_CITYDATA_2 = 'GET_CITYDATA_2';
const SET_CITY = 'SET_CITY';
const initState = {
  commodityDetailData: null,
  cityList2: [],
  city1: '',
  city2: ''
};

export const cdetailReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DETAIL_DATA:
      return { ...state, commodityDetailData: action.data };
    case GET_CITYDATA_2:
      return { ...state, cityList2: action.data };
    case SET_CITY:
      return {
        ...state,
        city1: action.city1 ? action.city1 : state.city1,
        city2: action.city2 ? action.city2 : state.city2
      };
    default:
      return state;
  }
};

const getCDDSucess = data => {
  return {
    type: GET_DETAIL_DATA,
    data: data
  };
};

export const getCDetailData = productID => {
  return dispatch => {
    axios
      .get('/api/cdetail.json?productID=' + productID)
      .then(res => {
        // console.log("------", res);
        dispatch(getCDDSucess(res.data.data));
      })
      .catch(e => {});
  };
};

export const setCity = (type, city) => {
  console.log(type,city);
  //0 1级城市 非0 2级城市
  if (type) {
    return {
      type: SET_CITY,
      city1: '',
      city2: city
    };
  } else {
    return {
      type: SET_CITY,
      city1: city,
      city2: ''
    };
  }
};

const getCITY2Sucess = data => {
  return {
    type: GET_CITYDATA_2,
    data: data
  };
};

export const getCityData2 = cityId => {
  return dispatch => {
    setTimeout(() => {
      const data = [
        {
          addrid: '1',
          addrname: '2级城市1'
        },
        {
          addrid: '2',
          addrname: '2级城市2'
        },
        {
          addrid: '3',
          addrname: '2级城市3'
        },
        {
          addrid: '4',
          addrname: '2级城市4'
        },
        {
          addrid: '5',
          addrname: '2级城市5'
        },
        {
          addrid: '6',
          addrname: '2级城市6'
        },
        {
          addrid: '8',
          addrname: '2级城市7'
        },
        {
          addrid: '9',
          addrname: '2级城市8'
        },
        {
          addrid: '10',
          addrname: '2级城市9'
        }
      ];
      dispatch(getCITY2Sucess(data));
    }, 2000);
  };
};
