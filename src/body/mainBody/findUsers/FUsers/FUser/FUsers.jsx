import React from "react"
import st from './FUsers.module.css'
import axios from "axios";

class FUsers extends React.Component {

    constructor(props) {
        super(props);

        axios.get("https://social-network.samuraijs.com/api/1.0/users?page=100&count=100").then((response) => {
            debugger
            this.props.usersPush(response.data.items)
        });

        /*props.usersPush([
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
            ])*/
    }

    usersData = () => this.props.usersData.map(user =>
        <div key={user.id} className={st.fUsers}>
            <div className={st.avatar}>
                <div className={st.avatar}><img
                    src={user?.photos.small ?? "https://cdn-icons-png.flaticon.com/512/6676/6676023.png"}
                    alt='Базовый аватар пользователя'/></div>
                {user.followed ? <button onClick={() => {
                        this.props.unfollow(user.id)
                    }}>Отписаться</button> :
                    <button onClick={() => {
                        this.props.follow(user.id)
                    }}>Подписаться</button>}
            </div>
            <div className={st.fUserInf}>
                <div className={st.flname}>{user.name}</div>
                <div className={st.description}>{user.status}</div>
            </div>
        </div>
    )

    render() {
        return <div>{this.usersData()}</div>
    }
}

export default FUsers;