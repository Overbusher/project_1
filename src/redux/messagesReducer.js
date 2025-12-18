let ADD_MESSAGE = 'ADD_MESSAGE';
const INPUT_MESSAGE = 'INPUT_MESSAGE';

const messagesReducer = (state, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                key: 19,
                id: 6,
                message: state.inputMessageData
            };
            state.messageData.push(newMessage);
            state.inputMessageData = '';
            return state;
        case INPUT_MESSAGE:
            state.inputMessageData = action.inputText;
            return state;
        default:
            return state;
    }
}

export default messagesReducer;