import st from './FindUsers.module.css';
import FUsersContainer from "./FUsers/FUsersContainer";

export const FindUsers = () => {
    return (
        <div className={st.findUsers}>
            <h1 className={st.findText}>Users:</h1>
            <div><FUsersContainer/></div>
        </div>
    )
}