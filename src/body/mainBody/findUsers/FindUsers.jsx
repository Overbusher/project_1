import st from './FindUsers.module.css';
import {FUsersContainer} from "./FUsers/FUser/FUsersContainer";

export const FindUsers = () => {
    return (
        <div className={st.findUsers}>
            <FUsersContainer/>
        </div>
    )
}