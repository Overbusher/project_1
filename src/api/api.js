import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "1b58b488-6bf1-4d5a-a89f-416bec40dd38"},
    baseURL: "https://social-network.samuraijs.com/api/1.0/"
})

export const API = {

    getUsers(usersPageNumber, usersOnPageCount) {
        return instance.get(`users?page=${usersPageNumber}&count=${usersOnPageCount}`).then(response => response.data);
    },

    followPost(id) {
        return instance.post(`follow/${id}`).then(response => response.data);
    },

    followDelete(id) {
        return instance.delete(`follow/${id}`).then(response => response.data);
    },

    getAuth() {
        return instance.get('auth/me').then(response => response.data);
    },

    getProfile(profileId) {
        return instance.get(`profile/${profileId}`).then(response => response.data);
    },
    getStatus(profileId){
        return instance.get(`/profile/status/${profileId}`).then(response => response.data);
    },
    setStatus(text){
        return instance.put(`/profile/status`, {status: text}).then(response => response.data);
    }

}