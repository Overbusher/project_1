import st from "./Dialogs.module.css"
import {Navigate, NavLink} from "react-router-dom";

export const Dialogs = (props) => {

    let activated = ({isActive}) => isActive ? st.active : st.dialog;

    let dialogData = props.dialogData.map(post =>
        <div className={st.dialog} key={post.id}>
            <NavLink to={"/messages/" + post.id} className={activated}>{post.name}</NavLink>
        </div>)

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <div className={st.dialogs}>
            {dialogData}
        </div>
    )
}
