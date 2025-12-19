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
                    <Route path='/messages/*' element={<MessagesPage store={props.store}/>}/>
                    <Route path='/home' element={<ProfilePage store={props.store}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}