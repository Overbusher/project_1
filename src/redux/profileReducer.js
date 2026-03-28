import {API} from "../api/api";

let INPUT_USER_DATA = 'INPUT_USER_DATA';
let IS_FETCHING = 'IS_FETCHING';
let SET_STATUS = 'SET_STATUS';

let initialState = {
    isFetching: false,
    userData: null,
    status: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case IS_FETCHING: {
            return {
                ...state,
                isFetching: action.status,
            }
        }
        case INPUT_USER_DATA: {
            return {
                ...state,
                userData: action.userData,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.text,
            }
        }
        default: {
            return state;
        }
    }
}

export const fetchingStatus = (status) => ({type: IS_FETCHING, status})
export const inputUserData = (userData) => ({type: INPUT_USER_DATA, userData})
export const getStatus = (text) => ({type: SET_STATUS, text})
export const setStatus = (text) => ({type: SET_STATUS, text})

export const getProfile = (profileId) => {
    return (dispatch) => {
        dispatch(fetchingStatus(true))
        API.getProfile(profileId).then((data) => {
            dispatch(inputUserData(data))
            dispatch(fetchingStatus(false))
        });
    }
}

export const getStatusAPI = (profileId) => {
    return (dispatch) => {
        API.getStatus(profileId).then((data) => {
            dispatch(getStatus(data ?? ""))
        });
    }
}

export const setStatusAPI = (text) => {
    return (dispatch) => {
        API.setStatus(text).then((data) => {
            dispatch(setStatus(data.data))
        });
    }
}

export default profileReducer;