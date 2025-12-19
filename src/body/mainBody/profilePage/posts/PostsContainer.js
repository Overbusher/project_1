import {addPostActionCreator, inputPostActionCreator} from "../../../../redux/profileReducer";
import {Posts} from "./Posts";
import React from "react";

export const PostsContainer = (props) => {
    let state= props.store.getState();
    let inputPostData=state.profilePage.inputPostData;
    let postData=state.profilePage.postData;

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let isChange = (inputText) => {
        props.dispatch(inputPostActionCreator(inputText));
    }

    return (
        <Posts addPost={addPost} isChange={isChange} inputPostData={inputPostData} postData={postData}/>
    )
}