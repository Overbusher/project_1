import st from './Message.module.css'
// import {useLocation} from "react-router-dom";

export const Message = (props) => {
    // const location = useLocation();
    // const path = location.pathname;
    // const lastChar = +path.slice(-1);
    // let msg = (props.id === lastChar) ? props.message : null;
    // console.log(msg);
    return (
        <div className={st.message}>
            {props.message}
        </div>
    )
}