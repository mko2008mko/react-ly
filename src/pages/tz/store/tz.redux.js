import axios from "axios";

const GET_TZ_DATA = "GET_TZ_DATA";

const initState = {
    tzData: null
}

export const tzReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_TZ_DATA:

            return { ...state, tzData: action.data };

        default:
            return state;
    }
}

const getTZSuccess = (data) => {
    return {
        type: GET_TZ_DATA,
        data: data
    }
}

export const getTZData = () => {
    return dispatch => {
        axios.get('/api/tz.json')
            .then(res => {
                dispatch(getTZSuccess(res.data.data))
                // console.log(res);
            })
            .catch(e => {

            })
    }
}
