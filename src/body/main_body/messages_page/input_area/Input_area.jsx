import st from "./Input_area.module.css"
import React from 'react';

export const InputArea = (props) => {

    let newMessageElement = React.createRef();

    let addMessage= () => props.dispatch({ type: "ADD_MESSAGE" });

    let isChange = () => {
        let inputText = newMessageElement.current.value;
        props.dispatch({ type: "INPUT_MESSAGE", inputText});
    }


    return (
        <div className={st.input_area}>
            <textarea onChange={isChange} value={props.inputMessageText} ref={newMessageElement}></textarea>
            <button onClick={addMessage}>Отправить</button>
        </div>
    )
}