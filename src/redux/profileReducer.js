let ADD_POST = 'ADD_POST';
let INPUT_POST = 'INPUT_POST';
let INPUT_USER_DATA = 'INPUT_USER_DATA';
let IS_FETCHING = 'IS_FETCHING';
let USER_ID_SET = 'USER_ID_SET';

let initialState = {
    isFetching: false,
    userData: null

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                text: state.inputPostData,
                src: "https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0"
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                inputPostData: '',
            }
        }
        case INPUT_POST: {
            return {
                ...state,
                inputPostData: action.inputText,
            }
        }
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
        case USER_ID_SET: {
            return {
                ...state,
                userId: action.userId,
            }
        }
        default: {
            return state;
        }
    }
}

export const addPost = () => ({type: ADD_POST})
export const inputPost = (inputText) => ({type: INPUT_POST, inputText})
export const fetchingStatus = (status) => ({type: IS_FETCHING, status})
export const inputUserData = (userData) => ({type: INPUT_USER_DATA, userData})
export const userIdSet = (userId) => ({type: USER_ID_SET, userId})

export default profileReducer;