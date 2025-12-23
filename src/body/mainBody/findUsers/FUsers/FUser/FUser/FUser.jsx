import st from "./FUser.module.css"

export const FUser = (props) => {

    let btnText = () => {
        if (props.followed === true) {
            return 'Отписаться';
        }
        return 'Подписаться';
    }

    let isOnClick = () => {
        let userID = props.id;
        if (props.followed === true) {
            props.unfollow(userID);
            console.log("Отписался");
        } else {
            props.follow(userID)
            console.log("Подписался");
        }
    }

    return (<div className={st.fUser}>
            <div className={st.avatar}>
                <div className={st.avatar}><img src="https://cdn-icons-png.flaticon.com/512/6676/6676023.png"
                                                alt='Базовый аватар пользователя'/></div>
                <button onClick={isOnClick}>{btnText()}</button>
            </div>
            <div className={st.fUserInf}>
                <div className={st.flname}>{props.fName} {props.lName}</div>
                <div className={st.description}>{props.description}</div>
                <div className={st.country}>{props.country},</div>
                <div className={st.city}>{props.city}</div>
            </div>
        </div>
    )
}