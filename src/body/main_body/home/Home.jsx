import './Home.css'
import {Posts} from './posts/Posts'
import {Avatar} from "./avatar/Avatar";
import {FL_name} from "./fl_name/FL_name";

const Home = (props) => {
    return (<div className='home'>
            <Avatar/>
            <FL_name/>
            <Posts postData={props.postData}/>
        </div>
    )
}

export default Home;