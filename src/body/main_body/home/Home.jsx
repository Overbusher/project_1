import './Home.css'
import {Posts} from './posts/Posts'
import {Avatar} from "./avatar/Avatar";
import {FL_name} from "./fl_name/FL_name";

const Home = () => {
    return (<div className='home'>
            <Avatar/>
            <FL_name/>
            <Posts/>
        </div>
    )
}

export default Home;