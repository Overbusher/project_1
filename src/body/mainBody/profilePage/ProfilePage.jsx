import './ProfilePage.css'
import {Avatar} from "./avatar/Avatar";
import {FLname} from "./fl_name/FLname";
import {PostsContainer} from "./posts/PostsContainer";

const ProfilePage = () => {
    return (<div className='profilePage'>
            <Avatar/>
            <FLname/>
            <PostsContainer/>
        </div>
    )
}

export default ProfilePage;