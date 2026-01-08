import st from './Header.module.css'
import headerImage from '../../assets/images/header.png'

export const Header = () => {
    return (
    <div className={st.header}>
        <img alt={"Header IMG"} src={headerImage} />
    </div>
)
}