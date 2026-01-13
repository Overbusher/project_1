let SET_USER_DATA = 'SET_USER_DATA';
let IS_FETCHING = 'IS_FETCHING';
let SET_PROFILE_DATA = 'SET_PHOTO';


let initialState = {
    isFetching: false,
    id: null,
    login: null,
    email: null,
    photo: null,
    fullName: null,
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
        case SET_PROFILE_DATA:
            return {
                ...state,
                photo: action.profileData.photos.small,
                fullName: action.profileData.fullName,

            }
        default:
            return state;
    }
}

export const setUserData = (userData) => ({type: 'SET_USER_DATA', userData})
export const fetchingStatus = (status) => ({type: 'IS_FETCHING', status})
export const setPhoto = (profileData) => ({type: 'SET_PROFILE_DATA', profileData})

export default authReducer;