import React from "react"
import st from './FUsers.module.css'
import axios from "axios";

class FUsers extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersOnPageCount}`, {
            withCredentials: true,
            headers: { "API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38" }}).then((response) => {
            this.props.usersPush(response.data.items)
            this.props.totalCount(response.data.totalCount)
        });
        /*axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPageNumber}&count=${this.props.usersOnPageCount}`).then((response) => {
            this.props.usersPush(response.data.items)
            this.props.totalCount(response.data.totalCount)
        });*/

    }

    onPageChanged = (p) => {
        this.props.nowPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.usersOnPageCount}`).then((response) => {
            this.props.usersPush(response.data.items)
        });

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
                <div className={st.uname}>{user.name}</div>
                <div className={st.description}>{user.status}</div>
            </div>
        </div>
    )

    render() {
        let usersPageCount = Math.ceil(this.props.totalUsersCount / this.props.usersOnPageCount)
        const currentPage = this.props.usersPageNumber;
        const pagesToShow = this.props.usersOnPageCount;
        const middlePage = Math.ceil(pagesToShow / 2);

        let startPage;

        if (currentPage <= middlePage) {
            startPage = 1;
        }
        else if (currentPage > usersPageCount - middlePage)
        {
            startPage = usersPageCount - pagesToShow + 1;
        }
        else
        {
            startPage = currentPage - middlePage + 1;
        }

        const endPage = Math.min(startPage + pagesToShow - 1);

        // Создаем массив страниц для отображения
        let pageCount = [];
        for (let i = startPage; i <= endPage; i++) {
            pageCount.push(i);
        }
// console.log(startPage);

        let pageCountList = pageCount.map(i => <span
            className={this.props.usersPageNumber === i ? st.userListMapActive : st.userListMap} key={i}
            onClick={() => {
                this.onPageChanged(i)
            }}>{i}</span>)

        return (
            <div>
                <div className={st.userList}>{pageCountList}</div>
                <div>{this.usersData()}</div>
            </div>)
    }
}

export default FUsers;