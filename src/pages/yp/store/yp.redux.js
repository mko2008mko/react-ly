import axios from "axios";

const GET_YP_DATA = "GET_YP_DATA";

const initState = {
    ypData: null
}

export const ypReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_YP_DATA:

            return { ...state, ypData: action.data };

        default:
            return state;
    }
}

const getYPDSuccess = (data) => {
    return {
        type: GET_YP_DATA,
        data: data
    }
}

export const getYPData = () => {
    return dispatch => {
        axios.get('/api/yp.json')
            .then(res => {
                dispatch(getYPDSuccess(res.data.data))
            })
            .catch(e => {

            })
    }
}