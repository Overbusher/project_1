let ADD_MESSAGE = 'ADD_MESSAGE';
const INPUT_MESSAGE = 'INPUT_MESSAGE';

let initialState = {
    dialogData: [
        {key: 1, id: 1, name: 'Diana'},
        {key: 2, id: 2, name: 'Vitaliy'},
        {key: 3, id: 3, name: 'Olga'},
        {key: 4, id: 4, name: 'Vera'},
        {key: 5, id: 5, name: 'Timofei'},
        {key: 6, id: 6, name: 'Vanya'}
    ],
    messageData: [
        {key: 1, id: 1, message: 'Привет'},
        {key: 2, id: 2, message: 'Привет'},
        {key: 3, id: 2, message: 'Вы завтра к нам?'},
        {key: 4, id: 1, message: 'Я тебя очень сильно люблю!'},
        {key: 5, id: 1, message: 'Как твои дела?'},
        {key: 6, id: 1, message: 'Не грусти из за того что мы поругались, мы помиримся и всё будет хорошо'},
        {key: 7, id: 2, message: 'Я буду готовить курицу'},
        {key: 8, id: 3, message: 'Привет'},
        {key: 9, id: 4, message: 'Vera'},
        {key: 10, id: 3, message: 'Я отдала весы'},
        {key: 11, id: 3, message: 'Как у вас дела?'},
        {key: 12, id: 4, message: 'Ха-ха'},
        {key: 13, id: 4, message: 'а я пишу код лучше чем ты'},
        {key: 14, id: 5, message: 'Привет, играть будешь?'},
        {key: 15, id: 5, message: 'Ты тут?'},
        {key: 16, id: 6, message: 'Привет, я сегодня не буду'},
        {key: 17, id: 6, message: 'Чувствую себя не оч'}
    ],
    inputMessageData: ''
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                key: 19,
                id: 6,
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

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const inputMessageActionCreator = (inputText) => ({type: INPUT_MESSAGE, inputText})

export default messagesReducer;