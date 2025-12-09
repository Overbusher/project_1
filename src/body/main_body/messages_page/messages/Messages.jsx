import st from './Messages.module.css'
import {Message} from "./message/Message";


export const Messages = (props) => {

    let messageData = props.messageData.map(msg =>
        <Message key={msg.id} id={msg.id}
                message={msg.message}/>)

    return (
        <div className={st.messages}>
            {messageData}
        </div>
    )
}