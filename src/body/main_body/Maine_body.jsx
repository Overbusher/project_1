import st from './Maine_body.module.css'
import Home from "./home/Home";
import {Messages} from "./messages/Messages";
import {Routes, Route} from "react-router-dom";
import {News} from "./news/News";
import {Settings} from "./settings/Settings";


export const Maine_body = () => {
    return (
        <div className={st.main_body}>
                <Routes>
                    <Route path='/messages/*' element={<Messages/>}/>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
        </div>

    )
}