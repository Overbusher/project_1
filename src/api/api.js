import axios from "axios";

const instance = axios.create({
    ithCredentials: true,
    headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
})

export const getUsers = (usersPageNumber, usersOnPageCount) => {
    return instance.get(`users?page=${usersPageNumber}&count=${usersOnPageCount}`, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const followPost = (id) => {
    return instance.post(`follow/${id}`, {}, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const followDelete = (id) => {
    return instance.delete(`follow/${id}`, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const getAuth = () => {
    return instance.get('auth/me', {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}

export const getProfile = (profileId) => {
    return instance.get(`profile/${profileId}`, {
        withCredentials: true,
        headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"}
    }).then(response => response.data);
}