import st from './Maine_body.module.css'
import Home from "./home/Home";
import {Messages_page} from "./messages_page/Messages_page";
import {Routes, Route} from "react-router-dom";
import {News} from "./news/News";
import {Settings} from "./settings/Settings";


export const Maine_body = (props) => {
    return (
        <div className={st.main_body}>
                <Routes>
                    <Route path='/messages/*' element={<Messages_page messagesPage={props.state.messagesPage}/>}/>
                    <Route path='/home' element={<Home homePage={props.state.homePage} addPost={props.addPost}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}