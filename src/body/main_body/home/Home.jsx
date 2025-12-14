import './Home.css'
import {Posts} from './posts/Posts'
import {Avatar} from "./avatar/Avatar";
import {FLname} from "./fl_name/FLname";

const Home = (props) => {
    return (<div className='home'>
            <Avatar/>
            <FLname/>
            <Posts postData={props.homePage.postData}
                   addPost={props.addPost}
                   inputPost={props.inputPost}
                   inputPostText={props.homePage.inputPostText}/>
        </div>
    )
}

export default Home;