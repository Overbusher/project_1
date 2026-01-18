import {followDelete, followPost, getUsers} from "../api/api";

let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let USERS_PUSH = 'USERS_PUSH';
let TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
let NOW_PAGE_NUMBER = 'NOW_PAGE_NUMBER';
let IS_FETCHING = 'IS_FETCHING';
let IS_IT_LOADING = 'IS_IT_LOADING';

let initialState = {
    usersData: [],
    usersOnPageCount: 11,
    totalUsersCount: 0,
    usersPageNumber: 1,
    isFetching: false,
    loadingState: [],

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true};
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((u) => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case USERS_PUSH:
            return {
                ...state,
                usersData: [...action.users]
            }
        case TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.count
            }
        case NOW_PAGE_NUMBER:
            return {
                ...state,
                usersPageNumber: action.number
            }
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.status
            }
        case IS_IT_LOADING: {
            return {
                ...state,
                loadingState: action.loadStatus
                    ? [...state.loadingState, action.userLStatusId]
                    : [...state.loadingState.filter(id => id !== action.userLStatusId)]
            }
        }
        default:
            return state;
    }
}

export const follow = (userID) => ({type: 'FOLLOW', userID})
export const unfollow = (userID) => ({type: 'UNFOLLOW', userID})
export const usersPush = (users) => ({type: 'USERS_PUSH', users})
export const totalUCount = (count) => ({type: 'TOTAL_USERS_COUNT', count})
export const nowPage = (number) => ({type: 'NOW_PAGE_NUMBER', number})
export const fetchingStatus = (status) => ({type: 'IS_FETCHING', status})
export const isItLoading = (loadStatus, userLStatusId) => ({type: 'IS_IT_LOADING', loadStatus, userLStatusId})

export const getUsersThunkCreator = (usersData, usersPageNumber, usersOnPageCount) => {
    return (dispatch) => {
        if (usersData.length === 0) {
            dispatch(fetchingStatus(true))
            getUsers(usersPageNumber, usersOnPageCount).then((data) => {
                dispatch(usersPush(data.items))
                dispatch(totalUCount(data.totalCount))
                dispatch(fetchingStatus(false))
            });
        } else dispatch(fetchingStatus(false))
    }
}

export const getUsersUpdateThunkCreator = (p, usersOnPageCount) => {
    return (dispatch) => {
        dispatch(fetchingStatus(true))
        dispatch(nowPage(p))
        getUsers(p, usersOnPageCount).then((data) => {
            dispatch(usersPush(data.items))
            dispatch(fetchingStatus(false))
        });
    }
}

export const followPostThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(isItLoading(true, id))
        followPost(id).then((data) => {
                if (data.resultCode === 0) {
                    dispatch(follow(id));
                }
                dispatch(isItLoading(false, id))
            }
        );
    }
}

export const followDeleteThunkCreator = (id) => {
    return (dispatch) => {
        dispatch(isItLoading(true, id))
        followDelete(id).then((data) => {
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(isItLoading(false, id))
        });
    }
}

export default userReducer;