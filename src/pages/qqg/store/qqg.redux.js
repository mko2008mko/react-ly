import axios from "axios";

const GET_QQG_DATA = "GET_QQG_DATA";

const initState = {
    qqgData: null
}

export const qqgReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_QQG_DATA:

            return { ...state, qqgData: action.data };

        default:
            return state;
    }
}

const getQQGSuccess = (data) => {
    return {
        type: GET_QQG_DATA,
        data: data
    }
}

export const getQQGData = () => {
    return dispatch => {
        axios.get('/api/qqg.json')
            .then(res => {
                dispatch(getQQGSuccess(res.data.data))
                // console.log(res);
            })
            .catch(e => {

            })
    }
}
