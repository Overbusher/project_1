import st from './Messages.module.css'
import {Message} from "./message/Message";
import React from "react";


export const Messages = (props) => {
    let messageData = props.messageData.map(msg =>
        <Message key={msg.id} id={msg.id}
                 message={msg.message}/>)

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onIsChange = () => {
        let inputText = newMessageElement.current.value;
        props.isChange(inputText);
    }

    return (<div>
            <div className={st.messages}>
                {messageData}
            </div>
            <div className={st.messages}>
                <textarea onChange={onIsChange} value={props.inputMessageData} ref={newMessageElement}
                          placeholder="Enter you'r message"></textarea>
            </div>
            <div>
                <button onClick={onAddMessage}>Отправить</button>
            </div>
        </div>
    )
}