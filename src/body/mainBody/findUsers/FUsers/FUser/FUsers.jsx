import st from './FUsers.module.css'

export const FUsers = (props) => {
    return (
        <div>
            {
                props.usersData.map(user =>
                    <div className={st.fUsers}>
                        <div className={st.avatar}>
                            <div className={st.avatar}><img
                                src="https://cdn-icons-png.flaticon.com/512/6676/6676023.png"
                                alt='Базовый аватар пользователя'/></div>
                            {user.followed ? <button onClick={() => {props.unfollow(user.id)}}>Отписаться</button> :
                                <button onClick={() => {props.follow(user.id)}}>Подписаться</button>}
                        </div>
                        <div className={st.fUserInf}>
                            <div className={st.flname}>{user.fName} {user.lName}</div>
                            <div className={st.description}>{user.description}</div>
                            <div className={st.country}>{user.country},</div>
                            <div className={st.city}>{user.city}</div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}