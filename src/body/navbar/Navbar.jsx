import st from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={st.navbar}>
            <div className={st.rs}><NavLink to='/home' className = {({isActive}) => (isActive ? st.active : st.item)}>Home</NavLink></div>
            <div className={st.rs}><NavLink to='/messages' className={({isActive}) => (isActive ? st.active : st.item)}>Messages</NavLink></div>
            <div className={st.rs}><NavLink to='/news' className={({isActive}) => (isActive ? st.active : st.item)}>News</NavLink></div>
            <div className={st.rs}><NavLink to='/settings' className={({isActive}) => (isActive ? st.active : st.item)}>Settings</NavLink></div>
        </nav>
    );
}