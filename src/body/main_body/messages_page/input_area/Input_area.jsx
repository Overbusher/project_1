import st from "./Input_area.module.css"
import React from 'react';

export const InputArea = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = props.addMessage;

    let isChange = () => {
        let text = newMessageElement.current.value;
        props.inputMessage(text);
    }


    return (
        <div className={st.input_area}>
            <textarea onChange={isChange} value={props.inputMessageText} ref={newMessageElement}></textarea>
            <button onClick={() => addMessage()}>Отправить</button>
        </div>
    )
}