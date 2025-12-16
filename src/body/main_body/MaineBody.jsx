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
                                                                     dispatch={props.dispatch}/>}/>
                    <Route path='/home' element={<Home homePage={props.state.homePage}
                                                       dispatch={props.dispatch}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}