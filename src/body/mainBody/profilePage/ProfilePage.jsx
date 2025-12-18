import './ProfilePage.css'
import {Posts} from './posts/Posts'
import {Avatar} from "./avatar/Avatar";
import {FLname} from "./fl_name/FLname";

const ProfilePage = (props) => {
    return (<div className='profilePage'>
            <Avatar/>
            <FLname/>
            <Posts postData={props.profilePage.postData}
                   inputPostData={props.profilePage.inputPostData}
                   dispatch={props.dispatch}/>
        </div>
    )
}

export default ProfilePage;