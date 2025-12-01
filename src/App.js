import './App.css';
import {Header} from "./body/header/Header";
import {Footer} from "./body/footer/Footer";
import {Navbar} from "./body/navbar/Navbar";
import {Maine_body} from "./body/main_body/Maine_body";

const App = () => {
    return (
        <div className='app_wrapper'>
            <Header/>
            <Navbar/>
            <Maine_body/>
            <Footer/>
        </div>
    );
}

export default App;
