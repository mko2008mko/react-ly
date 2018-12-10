import axios from "axios";

const GET_NFNB_DATA = "GET_NFNB_DATA";

const initState = {
    nfnbData: null
}

export const nfnbReducer = (state = initState, action) => {

    switch (action.type) {
        case GET_NFNB_DATA:

            return { ...state, nfnbData: action.data };

        default:
            return state;
    }
}

const getNFNBSuccess = (data) => {
    return {
        type: GET_NFNB_DATA,
        data: data
    }

}

export const getNFNBData = () => {
    return dispatch => {
        axios.get('/api/nfnb.json')
            .then(res => {
                // console.log("------", res);
                dispatch(getNFNBSuccess(res.data.data))

            })
            .catch(e => {

            })
    }
}