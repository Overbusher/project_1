import {API} from "../api/api";

let SET_USER_DATA = 'SET_USER_DATA';
let IS_FETCHING = 'IS_FETCHING';
let SET_PHOTO = 'SET_PHOTO';


let initialState = {
    isFetching: false,
    id: null,
    login: null,
    email: null,
    photo: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                id: action.userData.id,
                login: action.userData.login,
                email: action.userData.email,
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }
        case SET_PHOTO:
            return {
                ...state,
                photo: action.photoURL
            }
        default:
            return state;
    }
}

export const setUserData = (userData) => ({type: 'SET_USER_DATA', userData})
export const fetchingStatus = (status) => ({type: 'IS_FETCHING', status})
export const setPhoto = (photoURL) => ({type: 'SET_PHOTO', photoURL})

export const getAuth = () => {
    return (dispatch) => {
        dispatch(fetchingStatus(true))
        API.getAuth().then(
            (data) => {
                dispatch(setUserData(data.data))
                API.getProfile(data.data.id).then((data) => {
                    dispatch(setPhoto(data.photos.small))
                    dispatch(fetchingStatus(false))
                })
            })
    }
}

export default authReducer;