import st from "./Input_area.module.css"
import React from 'react';
import {addMessageActionCreator, inputMessageActionCreator} from "../../../../redux/messagesReducer";

export const InputArea = (props) => {

    let newMessageElement = React.createRef();

    let addMessage= () => {
        props.dispatch(addMessageActionCreator());
    }

    let isChange = () => {
        let inputText = newMessageElement.current.value;
        props.dispatch(inputMessageActionCreator(inputText));
    }


    return (
        <div className={st.input_area}>
            <textarea onChange={isChange} value={props.inputMessageData} ref={newMessageElement} placeholder="Enter you'r message"></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}