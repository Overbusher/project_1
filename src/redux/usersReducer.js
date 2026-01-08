let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';
let USERS_PUSH = 'USERS_PUSH';
let TOTAL_USERS_COUNT = 'TOTAL_USERS_COUNT';
let NOW_PAGE_NUMBER = 'NOW_PAGE_NUMBER';
let IS_FETCHING = 'IS_FETCHING';

let initialState = {
    usersData: [],
    usersOnPageCount: 10,
    totalUsersCount: 0,
    usersPageNumber: 1,
    isFetching: false,

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
        default:
            return state;
    }
}

export const followActionCreator = (userID) => ({type: 'FOLLOW', userID})
export const unfollowActionCreator = (userID) => ({type: 'UNFOLLOW', userID})
export const usersPushActionCreator = (users) => ({type: 'USERS_PUSH', users})
export const totalUsersCountActionCreator = (count) => ({type: 'TOTAL_USERS_COUNT', count})
export const nowPageNumberActionCreator = (number) => ({type: 'NOW_PAGE_NUMBER', number})
export const isFetchingActionCreator = (status) => ({type: 'IS_FETCHING', status})

export default userReducer;