import axios from "axios";


const GET_HOME_DATA = "GET_HOME_DATA";

const initState = {
    homeData: null
}

export const homeReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_HOME_DATA:

            return { ...state, homeData: action.data };

        default:
            return state;
    }
}

const getHDSuccess = (data) => {
    return {
        type: GET_HOME_DATA,
        data: data
    }
}

export const getHomeData = () => {
    return dispatch => {
        axios.get('/api/home.json')
            .then(res => {
                dispatch(getHDSuccess(res.data.data))
                // console.log(res);
            })
            .catch(e => {

            })
    }
}

