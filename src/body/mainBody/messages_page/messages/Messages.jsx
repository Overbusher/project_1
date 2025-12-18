import st from './Messages.module.css'
import {Message} from "./message/Message";


export const Messages = (props) => {
    // const location = useLocation();
    // const path = location.pathname;
    // const lastChar = +path.slice(-1);
    // let msg = props.messageData.find(ms => ms.id === lastChar);
    // console.log(msg);
    let messageData = props.messageData.map(msg =>
        <Message key={msg.id} id={msg.id}
                message={msg.message}/>)

    return (
        <div className={st.messages}>
            {messageData}
            {/*<Message message={props.messageData}/>*/}
        </div>
    )
}