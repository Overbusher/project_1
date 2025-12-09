import st from './Messages.module.css'
import {Message} from "./message/Message";


export const Messages = (props) => {
    // console.log(props);
    const {
        messageData = [],
    } = props;

    return (
        <div className={st.messages}>
            {messageData.map((data) => (<Message key={data.key} {...data}/>))}
        </div>
    )
}