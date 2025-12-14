import st from './MaineBody.module.css'
import Home from "./home/Home";
import {MessagesPage} from "./messages_page/MessagesPage";
import {Routes, Route} from "react-router-dom";
import {News} from "./news/News";
import {Settings} from "./settings/Settings";


export const MaineBody = (props) => {
    return (
        <div className={st.main_body}>
                <Routes>
                    <Route path='/messages/*' element={<MessagesPage messagesPage={props.state.messagesPage}
                                                                     addMessage={props.addMessage}/>}/>
                    <Route path='/home' element={<Home homePage={props.state.homePage}
                                                       addPost={props.addPost}
                                                       inputPost={props.inputPost}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}