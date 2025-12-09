import st from "./Dialog.module.css"
import {NavLink} from "react-router-dom";

export const Dialog = (props) => {
    let path = "/messages/" + props.id;

    let activated = ({isActive}) => isActive ? st.active : st.dialogs;

    return (
        <div className={st.dialogs}>
            <NavLink to={path} className={activated}>{props.name}</NavLink>
        </div>
    )
}