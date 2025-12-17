import st from "./Input_area.module.css"
import React from 'react';
import {addMessageActionCreator, inputMessageActionCreator} from "../../../../redux/state";

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
            <textarea onChange={isChange} value={props.inputMessageText} ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}