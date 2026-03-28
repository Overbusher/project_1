import React from "react";

export const StatusEnter = (props) => {
    let newPostElement = React.createRef();
    let nowTextInput = () => {
        let inputText = newPostElement.current.value;
        props.setStatus(inputText);
    }
    return (
        <div>
            <span>
                <div>{props.status ? null : "Описание: " + props.status}</div>
            </span>
            <span><input onChange={() => {nowTextInput()}}
                          ref={newPostElement} value={props.status}
                         onBlur={() => {props.setStatusAPI(props.status)}}
            /></span>
        </div>
    )
}