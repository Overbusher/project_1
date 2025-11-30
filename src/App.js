import './App.css';
import Header from "./body/header/Header";
import Footer from "./body/footer/Footer";
import Navbar from "./body/navbar/Navbar";
import Main_body from "./body/main_body/Main_body";

const App = () => {
    return (

        <div className='app-wrapper'>
            <header className='head'><Header/></header>
            <nav className='nav'><Navbar/></nav>
            <div className='content'><Main_body/></div>
            <footer className='foot'><Footer/></footer>
        </div>
    );
}

export default App;
