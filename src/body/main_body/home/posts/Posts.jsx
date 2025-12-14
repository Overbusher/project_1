import st from './Posts.module.css'
import {Post} from "./post/Post";
import React from 'react';


export const Posts = (props) => {
    let postsElements = props.postData.map(post =>
        <Post key={post.id} texta={post.text}
              srcs={post.src}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={st.posts}>
            <div className={st.posts}>
                Посты:
            </div>
            <div className={st.posts}>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div className={st.posts}>
                <button onClick={() => addPost()}>Добавить
                </button>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    )
}