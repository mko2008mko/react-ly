import axios from 'axios';

const GET_LOGIN = 'GET_LOGIN';
const GET_LOGOUT = 'GET_LOGOUT';
const GET_PCODE = 'GET_PCODE';
const GET_REGISTER = 'GET_REGISTER';
const TEST_STORE = 'TEST_STORE';
const initState = {
  username: '',
  pcode: ''
};

export const userReducer = (state = initState, ation) => {
  switch (ation.type) {
    case GET_LOGIN:
      return { ...state, username: ation.data.username };
    case GET_LOGOUT:
      return { initState };
    case GET_REGISTER:
      return { ...state, username: ation.data.username };
    case GET_PCODE:
      return { ...state, pcode: ation.data.pcode };
    case TEST_STORE:
      return { ...state, username: 'test-store' };
    default:
      return state;
  }
};

const loginSuccess = data => {
  return {
    type: GET_LOGIN,
    data: data
  };
};

export const getLogin = login => {
  // console.log(login);
  return dispatch => {
    axios
      .get('/api/user.json')
      .then(res => {
        // console.log("------", res);
        dispatch(loginSuccess(res.data.data));
      })
      .catch(e => {});
  };
};

const logoutSuccess = () => {
  return {
    type: GET_LOGOUT
  };
};

export const getLogout = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logoutSuccess());
    }, 1000);
  };
};

const registerSuccess = data => {
  return {
    type: GET_LOGIN,
    data: data
  };
};

export const getRegister = register => {
  // console.log(login);
  return dispatch => {
    axios
      .get('/api/user.json')
      .then(res => {
        // console.log("------", res);
        dispatch(registerSuccess(res.data.data));
      })
      .catch(e => {});
  };
};

const getPCSuccess = data => {
  return {
    type: GET_PCODE,
    data: data
  };
};

export const getPcode = phone => {
  return dispatch => {
    axios
      .get('/api/user.json')
      .then(res => {
        // console.log("------", res);
        dispatch(getPCSuccess(res.data.data));
      })
      .catch(e => {});
  };
};

export const testStore = () => {
  return {
    type: TEST_STORE
  };
};
