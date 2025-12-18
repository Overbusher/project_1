let ADD_POST = 'ADD_POST';
let INPUT_POST = 'INPUT_POST';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                text: state.inputPostData,
                src: "https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0"
            };
            state.postData.push(newPost);
            state.inputPostData = '';
            return state;
        case INPUT_POST:
            state.inputPostData = action.inputText;
            return state;
        default:
            return state;
    }
}


export default profileReducer;