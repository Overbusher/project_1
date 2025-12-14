import st from "./Input_area.module.css"
import React from 'react';

export const InputArea = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        props.addMessage(text);
    }

    return (
        <div className={st.input_area}>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={() => addMessage()}>Отправить</button>
        </div>
    )
}