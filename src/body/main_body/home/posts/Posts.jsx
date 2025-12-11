import st from './Posts.module.css'
import {Post} from "./post/Post";


export const Posts = (props) => {
    let postsElements = props.postData.map(post =>
        <Post key={post.id} texta={post.text}
              srcs={post.src}/>)
    return (
        <div className={st.posts}>
            <div className={st.posts}>
                Посты:
            </div>
            <div className={st.posts}>
                <textarea></textarea>
            </div>
            <div className={st.posts}>
                <button onClick={ () => { alert("Hey!") }}>Добавить</button>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    )
}