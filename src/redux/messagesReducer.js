let ADD_MESSAGE = 'ADD_MESSAGE';
const INPUT_MESSAGE = 'INPUT_MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: 'Diana'},
        {id: 2, name: 'Vitaliy'},
        {id: 3, name: 'Olga'},
        {id: 4, name: 'Vera'},
        {id: 5, name: 'Timofei'},
        {id: 6, name: 'Vanya'}
    ],
    messageData: [
        {id: 1, message: 'Привет'},
        {id: 2, message: 'Привет'},
        {id: 2, message: 'Вы завтра к нам?'},
        {id: 1, message: 'Я тебя очень сильно люблю!'},
        {id: 1, message: 'Как твои дела?'},
        {id: 2, message: 'Я буду готовить курицу'},
        {id: 3, message: 'Привет'},
        {id: 4, message: 'Vera'},
        {id: 3, message: 'Я отдала весы'},
        {id: 3, message: 'Как у вас дела?'},
        {id: 4, message: 'Ха-ха'},
        {id: 4, message: 'а я пишу код лучше чем ты'},
        {id: 5, message: 'Привет, играть будешь?'},
        {id: 5, message: 'Ты тут?'},
        {id: 6, message: 'Привет, я сегодня не буду'},
        {id: 6, message: 'Чувствую себя не оч'}
    ],
    inputMessageData: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: action.userID,
                message: state.inputMessageData
            };
            return {
                ...state,
                messageData: [...state.messageData, newMessage],
                inputMessageData: '',
            }
        }
        case INPUT_MESSAGE: {
            return {
                ...state,
                inputMessageData: action.inputText,
            }
        }
        default: {
            return state;
        }
    }
}

export const addMessageActionCreator = (userID) => ({type: ADD_MESSAGE, userID});

export const inputMessageActionCreator = (inputText) => ({type: INPUT_MESSAGE, inputText})

export default messagesReducer;