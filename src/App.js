import './App.css';
import {Footer} from "./body/footer/Footer";
import {Navbar} from "./body/navbar/Navbar";
import {MainBody} from "./body/mainBody/MainBody";
import HeaderContainer from "./body/header/HeaderContainer";

const App = () => {
    return (
        <div className='app_wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <MainBody/>
            <Footer/>
        </div>
    );
}

export default App;
