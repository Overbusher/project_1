import './App.css';
import {Header} from "./body/header/Header";
import {Footer} from "./body/footer/Footer";
import {Navbar} from "./body/navbar/Navbar";
import {MaineBody} from "./body/main_body/MaineBody";

const App = (props) => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <MaineBody
                       state={props.state}
                       inputPost={props.inputPost}
                       addPost={props.addPost}
                       inputMessage={props.inputMessage}
                       addMessage={props.addMessage}
            />
            <Footer/>
        </div>
    );
}

export default App;
