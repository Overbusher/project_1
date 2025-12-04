import st from './Navbar.module.css'

export const Navbar = () => {
    return (<div className={st.navbar}>
            <div><a href='/home'>Home</a></div>
            <div><a href='/messages'>Messages</a></div>
            <div><a href='/news'>News</a></div>
        </div>
    );
}