import st from './MainBody.module.css'
import {MessagesPage} from "./messages_page/MessagesPage";
import {Routes, Route} from "react-router-dom";
import {News} from "./news/News";
import {Settings} from "./settings/Settings";
import {FindUsers} from "./findUsers/FindUsers";
import {Login} from "./login/Login";
import ProfileContainer from "./profilePage/ProfileContainer";


export const MainBody = () => {
    return (
        <div className={st.mainBody}>
                <Routes>
                    <Route path="/" element={<ProfileContainer/>}/>
                    <Route path='/messages/*' element={<MessagesPage/>}/>
                    <Route path='/profile/:profileId?' element={<ProfileContainer/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                    <Route path='/findusers' element={<FindUsers/>}/>
                    <Route path='/login' element={<Login/>}/>

                </Routes>
        </div>

    )
}