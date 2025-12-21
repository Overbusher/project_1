let ADD_POST = 'ADD_POST';
let INPUT_POST = 'INPUT_POST';

let initialState = {
    postData: [
        {
            id: 1,
            text: 'FUS RO DAH!',
            src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
        },
        {
            id: 2,
            text: 'LIGHT WEIGHT, BABY!!!',
            src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
        },
        {
            id: 3,
            text: 'You COOL, BROO!!',
            src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
        },
        {
            id: 4,
            text: 'Hi! How are you?',
            src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
        },
    ],
    inputPostData: ''
}

const profileReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        postData: [...state.postData]
    };

    switch (action.type) {
        case ADD_POST:
        {
            let newPost = {
                id: 5,
                text: state.inputPostData,
                src: "https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0"
            };
            stateCopy.postData.push(newPost);
            stateCopy.inputPostData = '';
            return stateCopy;
        }
        case INPUT_POST:
        {
            stateCopy.inputPostData = action.inputText;
            return stateCopy;
        }
        default:
        {
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})

export const inputPostActionCreator = (inputText) => ({type: INPUT_POST, inputText})

export default profileReducer;