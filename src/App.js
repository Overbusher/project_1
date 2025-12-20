import './App.css';
import {Header} from "./body/header/Header";
import {Footer} from "./body/footer/Footer";
import {Navbar} from "./body/navbar/Navbar";
import {MainBody} from "./body/mainBody/MainBody";

const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <MainBody/>
            <Footer/>
        </div>
    );
}

export default App;
