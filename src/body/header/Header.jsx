import st from './Header.module.css'
import headerImage from './header.png'

export const Header = () => {
    return (
    <div className={st.header}>
        {/*<img src='https://cdn.pixabay.com/photo/2022/08/23/11/40/fox-7405603_1280.png' />*/}
        <img alt={"Header IMG"} src={headerImage} />
    </div>
)
}