import st from './Messages.module.css'
import {Message} from "./message/Message";


export const Messages = (props) => {
    // console.log(props);
    const {
        msg = [],
    } = props;

    return (
        <div className={st.messages}>
            {msg.map((data) => (<Message key={data.key} {...data}/>))}
        </div>
    )
}