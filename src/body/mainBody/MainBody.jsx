import st from './MainBody.module.css'
import ProfilePage from "./profilePage/ProfilePage";
import {MessagesPage} from "./messages_page/MessagesPage";
import {Routes, Route} from "react-router-dom";
import {News} from "./news/News";
import {Settings} from "./settings/Settings";


export const MainBody = (props) => {
    return (
        <div className={st.mainBody}>
                <Routes>
                    <Route path='/messages/*' element={<MessagesPage messagesPage={props.state.messagesPage}
                                                                     dispatch={props.dispatch}/>}/>
                    <Route path='/home' element={<ProfilePage profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}