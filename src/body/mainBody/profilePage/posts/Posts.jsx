import st from './Posts.module.css'
import {Post} from "./post/Post";
import React from 'react';
import {addPostActionCreator, inputPostActionCreator} from "../../../../redux/state";


export const Posts = (props) => {
    let postsElements = props.postData.map(post =>
        <Post key={post.id} texta={post.text}
              srcs={post.src}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }

    let isChange = () => {
        let inputText = newPostElement.current.value;
        props.dispatch(inputPostActionCreator(inputText));
    }

    return (
        <div className={st.posts}>
            <div className={st.posts}>
                Посты:
            </div>
            <div className={st.posts}>
                <textarea onChange={isChange} value={props.inputPostData} placeholder= "Enter you'r post text" ref={newPostElement}/>
            </div>
            <div className={st.posts}>
                <button onClick={addPost}>Добавить
                </button>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    )
}