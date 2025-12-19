import st from './Posts.module.css'
import {Post} from "./post/Post";
import React from 'react';


export const Posts = (props) => {
    let postsElements = props.postData.map(post =>
        <Post key={post.id} texta={post.text}
              srcs={post.src}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onIsChange = () => {
        let inputText = newPostElement.current.value;
        props.isChange(inputText);
    }

    return (
        <div className={st.posts}>
            <div className={st.posts}>
                Посты:
            </div>
            <div className={st.posts}>
                <textarea onChange={onIsChange} value={props.inputPostData} placeholder= "Enter you'r post text" ref={newPostElement}/>
            </div>
            <div className={st.posts}>
                <button onClick={onAddPost}>Добавить
                </button>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    )
}