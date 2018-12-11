import axios from "axios";

const GET_SP_DATA = "GET_SP_DATA";
const initState = {
    spData: null
}

export const spReducer = (state = initState, action) => {
    switch (action.type) {
        case GET_SP_DATA:

            return { ...state, spData: action.data };

        default:
            return state;
    }
}

const getSPDSuccess = (data) => {
    return {
        type: GET_SP_DATA,
        data: data
    }
}

export const getSPData = () => {
    return dispatch => {
        axios.get('/api/sp.json')
            .then(res => {
                dispatch(getSPDSuccess(res.data.data));
            })
            .catch(e => {

            })
    }
}