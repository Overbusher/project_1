import axios from "axios";

export const getUsers = (usersPageNumber, usersOnPageCount) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${usersPageNumber}&count=${usersOnPageCount}`, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const followPost = (id) => {
    return axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const followDelete = (id) => {
    return axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const getAuth = () => {
    return axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const getProfile = (profileId) => {
    return axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${profileId}`, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}