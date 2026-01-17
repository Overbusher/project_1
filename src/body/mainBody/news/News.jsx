import st from './News.module.css';
import {Preloader} from "../../common/preloader/Preloader";

export const News = () => {
    return (
        <div className={st.news}>
            <Preloader />
        </div>
    )
}