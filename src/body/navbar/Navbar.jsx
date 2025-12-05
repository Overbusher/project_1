import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={st.navbar}>
            <div><NavLink to='/home'>Home</NavLink></div>
            <div><NavLink to='/messages'>Messages</NavLink></div>
            <div><NavLink to='/news'>News</NavLink></div>
            <div><NavLink to='/settings'>Settings</NavLink></div>
        </nav>
    );
}