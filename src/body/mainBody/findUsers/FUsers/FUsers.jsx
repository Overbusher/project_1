import st from "./FUsers.module.css";
import React from "react";
import {NavLink} from "react-router-dom";
import {Preloader} from "../../../common/preloader/Preloader";


const FUsers = (props) => {
    let usersPageCount = Math.ceil(props.totalUsersCount / props.usersOnPageCount)
    const currentPage = props.usersPageNumber;
    const pagesToShow = props.usersOnPageCount;
    const middlePage = Math.ceil(pagesToShow / 2);

    let startPage;

    if (currentPage <= middlePage) {
        startPage = 1;
    } else if (currentPage > usersPageCount - middlePage) {
        startPage = usersPageCount - pagesToShow + 1;
    } else {
        startPage = currentPage - middlePage + 1;
    }

    const endPage = Math.min(startPage + pagesToShow - 1);

    let pageCount = [];
    for (let i = startPage; i <= endPage; i++) {
        pageCount.push(i);
    }

    let pageCountList = pageCount.map(i => <span
        className={props.usersPageNumber === i ? st.userListMapActive : st.userListMap} key={i}
        onClick={() => {
            props.onPageChanged(i)
        }}>{i}</span>)

    let usersData = () => props.usersData.map(user =>
        <div key={user.id} className={st.fUsers}>
            <div className={st.avatar}>
                <div className={st.avatar}>
                    <NavLink to={"/profile/" + user.id} className={st.avatar} onClick={() => {props.userIdSet(user.id)}}>
                    <img
                    src={user?.photos.small ?? "https://cdn-icons-png.flaticon.com/512/6676/6676023.png"}
                    alt="Базовый аватар пользователя"/>
                    </NavLink>
                </div>
                {user.followed ? <button onClick={() => {
                        props.unfollow(user.id)
                    }}>Отписаться</button> :
                    <button onClick={() => {
                        props.follow(user.id)
                    }}>Подписаться</button>}
            </div>
            <div className={st.fUserInf}>
                <div className={st.uname}>{user.name}</div>
                <div className={st.description}>{user.status}</div>
            </div>
        </div>
    )

    return (
        (props.isFetching ?
                <Preloader /> :
                <div>
                    <div className={st.userList}>{pageCountList}</div>
                    <div>{usersData()}</div>
                </div>
        )
    )
}

export default FUsers;