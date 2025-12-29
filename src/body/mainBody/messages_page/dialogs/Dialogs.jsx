import st from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

export const Dialogs = (props) => {

    let activated = ({isActive}) => isActive ? st.active : st.dialog;

    let dialogData = props.dialogData.map(post =>
        <div className={st.dialog}>
            <NavLink to={"/messages/" + post.id} className={activated}>{post.name}</NavLink>
        </div>)

    return (
        <div className={st.dialogs}>
            {dialogData}
        </div>
    )
}
