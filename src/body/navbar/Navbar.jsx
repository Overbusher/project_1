import st from './Navbar.module.css'

export const Navbar = () => {
    return (<div className={st.navbar}>
            <div><a href='#S'>Home</a></div>
            <div><a href='#S'>News</a></div>
            <div><a href='#S'>Feed</a></div>
        </div>
    );
}