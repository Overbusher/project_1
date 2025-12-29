import st from './FUsers.module.css'

export const FUsers = (props) => {
    if (props.usersData.length === 0) {
        props.usersPush([
                {
                    id: 1,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6676/6676023.png',
                    fName: 'Diana',
                    lName: 'Raeva',
                    country: 'Belarus',
                    city: 'Grodno',
                    description: 'Красотка невиданных красот',
                    followed: true,
                },
                {
                    id: 2,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6676/6676023.png',
                    fName: 'Vitaliy',
                    lName: 'Raev',
                    country: 'Belarus',
                    city: 'Grodno',
                    description: 'Суперэлектрик, и главное- очень скромный',
                    followed: true,
                },
                {
                    id: 3,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6676/6676023.png',
                    fName: 'Olga',
                    lName: 'Raeva',
                    country: 'Belarus',
                    city: 'Grodno',
                    description: 'Суперпсихолог- открою тебе понимание-_-',
                    followed: true,
                },
                {
                    id: 4,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6676/6676023.png',
                    fName: 'Vera',
                    lName: 'Raeva',
                    country: 'Belarus',
                    city: 'Grodno',
                    description: 'Тоже немного программист---',
                    followed: false,
                },
                {
                    id: 5,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6676/6676023.png',
                    fName: 'Timofei',
                    lName: 'Raev',
                    country: 'Belarus',
                    city: 'Grodno',
                    description: 'Чё, катку будешь?',
                    followed: true,
                },
                {
                    id: 6,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/6676/6676023.png',
                    fName: 'Vanya',
                    lName: 'Batchkovich',
                    country: 'Ukrain',
                    city: 'Shepetivka',
                    description: 'Я твой варкрафт проходил',
                    followed: false,
                },
            ])
    }

    let usersData = props.usersData.map(user =>
            <div key={user.id} className={st.fUsers}>
                <div className={st.avatar}>
                    <div className={st.avatar}><img
                        src={user.avatar}
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

    return (
        <div>
            {usersData}
        </div>
    )
}