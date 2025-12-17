import './Home.css'
import {Posts} from './posts/Posts'
import {Avatar} from "./avatar/Avatar";
import {FLname} from "./fl_name/FLname";

const Home = (props) => {
    return (<div className='home'>
            <Avatar/>
            <FLname/>
            <Posts postData={props.homePage.postData}
                   inputPostData={props.homePage.inputPostData}
                   dispatch={props.dispatch}/>
        </div>
    )
}

export default Home;