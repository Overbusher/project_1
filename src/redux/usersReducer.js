let FOLLOW = 'FOLLOW';
let UNFOLLOW = 'UNFOLLOW';

let initialState = {
    usersData: [
        {
            id: 1,
            fName: 'Diana',
            lName: 'Raeva',
            country: 'Belarus',
            city: 'Grodno',
            description: 'Красотка невиданных красот',
            followed: true,
        },
        {
            id: 2,
            fName: 'Vitaliy',
            lName: 'Raev',
            country: 'Belarus',
            city: 'Grodno',
            description: 'Суперэлектрик, и главное- очень скромный',
            followed: true,
        },
        {
            id: 3,
            fName: 'Olga',
            lName: 'Raeva',
            country: 'Belarus',
            city: 'Grodno',
            description: 'Суперпсихолог- открою тебе понимание-_-',
            followed: true,
        },
        {
            id: 4,
            fName: 'Vera',
            lName: 'Raeva',
            country: 'Belarus',
            city: 'Grodno',
            description: 'Тоже немного программист---',
            followed: false,
        },
        {
            id: 5,
            fName: 'Timofei',
            lName: 'Raev',
            country: 'Belarus',
            city: 'Grodno',
            description: 'Чё, катку будешь?',
            followed: true,
        },
        {
            id: 6,
            fName: 'Vanya',
            lName: 'Batchkovich',
            country: 'Ukrain',
            city: 'Shepetivka',
            description: 'Я твой варкрафт проходил',
            followed: false,
        },
    ],
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
        default:
            return state;
    }
}

export const followActionCreator = (userID) => ({type: 'FOLLOW', userID})
export const unfollowActionCreator = (userID) => ({type: 'UNFOLLOW', userID})

export default userReducer;