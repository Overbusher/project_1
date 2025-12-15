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
                    <Route path='/messages/*' element={<MessagesPage messagesPage={props.store.state.messagesPage}
                                                                     addMessage={props.store.addMessage}/>}/>
                    <Route path='/home' element={<Home homePage={props.store.state.homePage}
                                                       addPost={props.store.addPost}
                                                       inputPost={props.store.inputPost}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}