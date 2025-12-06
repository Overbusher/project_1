import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    let activated = ({isActive}) => isActive ? st.active : st.item;
    return (
        <nav className={st.navbar}>
            <div className={st.rs}><NavLink to='/home' className = {activated}>Home</NavLink></div>
            <div className={st.rs}><NavLink to='/messages' className={activated}>Messages</NavLink></div>
            <div className={st.rs}><NavLink to='/news' className={activated}>News</NavLink></div>
            <div className={st.rs}><NavLink to='/settings' className={activated}>Settings</NavLink></div>
        </nav>
    );
}