let ADD_POST = 'ADD_POST';
let INPUT_POST = 'INPUT_POST';
let ADD_MESSAGE = 'ADD_MESSAGE';
const INPUT_MESSAGE = 'INPUT_MESSAGE';

let store = {
    _state: {
        homePage: {
            postData: [
                {
                    id: 1,
                    text: 'FUS RO DAH!',
                    src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
                },
                // {id:1, text: 'FUS RO DAH!', src:'https://assetsio.gnwcdn.com/elder-scrolls-skyrim-artwork.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp'},
                // {id:2, text: 'LIGHT WEIGHT, BABY!!!', src:'https://i1.sndcdn.com/artworks-zQNVURezx4vONC0z-XErjxw-t500x500.jpg'},
                {
                    id: 2,
                    text: 'LIGHT WEIGHT, BABY!!!',
                    src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
                },
                // {id:3, text: 'You COOL, BROO!!', src:'https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'},
                {
                    id: 3,
                    text: 'You COOL, BROO!!',
                    src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
                },
                // {id:4, text: 'Hi! How are you?', src:'https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'},
                {
                    id: 4,
                    text: 'Hi! How are you?',
                    src: 'https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0'
                },
            ],
            inputPostData: ''
        },

        messagesPage: {
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


    },
    getState() {
        return this._state;
    },
    rerenderEntireTree() {
        console.log("State have been changed!");
    },
    subscribe(observer) {
        this.rerenderEntireTree = observer;
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            let newPost = {
                id: 5,
                text: this._state.homePage.inputPostData,
                src: "https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0"
            };
            this._state.homePage.postData.push(newPost);
            this._state.homePage.inputPostData = '';
            this.rerenderEntireTree(this._state);

        } else if (action.type === 'INPUT_POST') {
            this._state.homePage.inputPostData = action.inputText;
            this.rerenderEntireTree(this._state);

        } else if (action.type === 'ADD_MESSAGE') {
            let newMessage = {
                key: 19,
                id: 6,
                message: this._state.messagesPage.inputMessageData
            };
            this._state.messagesPage.messageData.push(newMessage);
            this._state.messagesPage.inputMessageData = '';
            this.rerenderEntireTree(this._state);

        } else if (action.type === 'INPUT_MESSAGE') {
            this._state.messagesPage.inputMessageData = action.inputText;
            this.rerenderEntireTree(this._state);
            console.log(this._state.messagesPage.inputMessageData);
        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST})

export const inputPostActionCreator = (inputText) => ({type: INPUT_POST, inputText})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export const inputMessageActionCreator = (inputText) => ({type: INPUT_MESSAGE, inputText})

// addPost() {
//     let newPost = {
//         id: 5,
//         text: this._state.homePage.inputPostText,
//         src: "https://sun9-55.userapi.com/s/v1/ig2/ZyBsxGr_o07pRdrAAniwTaTTNbXy4UIHSQffk5IdOGzeZV_Dr1byiJ3_m2zzdHKjnqNmRu53iphy4avSqZJiWJrM.jpg?quality=96&as=32x32,48x48,72x72,108x108,160x161,228x229&from=bu&cs=228x0"
//     };
//     this._state.homePage.postData.push(newPost);
//     this._state.homePage.inputPostText = '';
//     this.rerenderEntireTree(this._state);
// },
// inputPost(inputText) {
//     this._state.homePage.inputPostText = inputText;
//     this.rerenderEntireTree(this._state);
// },
// addMessage() {
//     let newMessage = {
//         key: 19,
//         id: 6,
//         message: this._state.messagesPage.inputMessageText
//     };
//     this._state.messagesPage.messageData.push(newMessage);
//     this._state.messagesPage.inputMessageText = '';
//     this.rerenderEntireTree(this._state);
// },
// inputMessage(inputText) {
//     this._state.messagesPage.inputMessageText = inputText;
//     this.rerenderEntireTree(this._state);
//     console.log(this._state.messagesPage.inputMessageText);
// },

export default store;
window.store = store;