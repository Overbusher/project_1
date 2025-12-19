import './ProfilePage.css'
import {Avatar} from "./avatar/Avatar";
import {FLname} from "./fl_name/FLname";
import {PostsContainer} from "./posts/PostsContainer";
import store from "../../../redux/reduxStore";

const ProfilePage = (props) => {
    return (<div className='profilePage'>
            <Avatar/>
            <FLname/>
            <PostsContainer store={props.store}
                            dispatch={store.dispatch.bind(store)}/>
        </div>
    )
}

export default ProfilePage;