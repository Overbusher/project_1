import st from './Header.module.css'
import headerImage from '../../assets/images/header.png'

export const Header = (props) => {
    return (
        <div className={st.header}>
            <div className={st.userHalf}>
                <div>
                    <img alt={"user IMG"}
                         src={props?.photo ?? "https://cdn-icons-png.flaticon.com/512/6676/6676023.png"}/>
                    <div className={st.userName}>
                        {props.login}
                    </div>
                </div>
            </div>
            <div className={st.imageHalf}>
                <img alt={"Header IMG"} src={headerImage}/>
            </div>
        </div>
    )
}