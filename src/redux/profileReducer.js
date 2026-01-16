let INPUT_USER_DATA = 'INPUT_USER_DATA';
let IS_FETCHING = 'IS_FETCHING';

let initialState = {
    isFetching: false,
    userData: null,
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
        default: {
            return state;
        }
    }
}

export const fetchingStatus = (status) => ({type: IS_FETCHING, status})
export const inputUserData = (userData) => ({type: INPUT_USER_DATA, userData})

export default profileReducer;