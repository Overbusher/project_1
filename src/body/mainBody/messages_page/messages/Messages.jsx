import st from './Messages.module.css'
import React, {useMemo} from "react";
import {useParams} from "react-router-dom";


export const Messages = (props) => {

    const {id} = useParams();
    const userID = Number(id);

    let filteredMessages = useMemo(() => {
            return props.messageData.filter(msg => msg.id === userID)
        },
        [props.messageData, userID]);

    let messageData = useMemo(() => {
        return filteredMessages.map((msg, index) => <div key={index} className={st.message}>{msg.message}</div>)
        },
            [filteredMessages]);


    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage(userID);
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