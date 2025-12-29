import st from './MessagesPage.module.css'
import {MessagesContainer} from "./messages/MessagesContainer";
import {DialogsContainer} from "./dialogs/DialogsContainer";
import {Route, Routes} from "react-router-dom";

export const MessagesPage = () => {
    return (
        <div className={st.msg}>
            <DialogsContainer/>
            <Routes>
                <Route path=":id" element={<MessagesContainer/>}/>
            </Routes>
        </div>
    )
}