import st from './Header.module.css'
import headerImage from '../../assets/images/header.png'
import {NavLink} from "react-router-dom";

export const Header = (props) => {
    return (
        <div className={st.header}>
            <div className={st.userHalf}>
                <div>
                    {props.login ?
                        <div>
                            <img alt={"user IMG"}
                                 src={props?.photo ?? "https://cdn-icons-png.flaticon.com/512/6676/6676023.png"}/>
                            <div className={st.userName}>
                                {props?.login}
                            </div>
                        </div> :
                        <div>
                            <img alt={"user IMG"}
                                 src={props?.photo ?? "https://cdn-icons-png.flaticon.com/512/6676/6676023.png"}/>
                            <div className={st.userName}>
                                <div>
                                    Guest User
                                </div>
                                <div>
                                    <NavLink to="/login">Login</NavLink>
                                </div>
                            </div>
                        </div>}
                </div>
            </div>
            <div className={st.imageHalf}>
                <img alt={"Header IMG"} src={headerImage}/>
            </div>
        </div>
    )
}