import st from './Posts.module.css'
import {Post} from "./post/Post";


export const Posts = () => {
    let postData = [
        {text: 'FUS RO DAH!', src:'https://assetsio.gnwcdn.com/elder-scrolls-skyrim-artwork.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp'},
        {text: 'LIGHT WEIGHT, BABY!!!', src:'https://i1.sndcdn.com/artworks-zQNVURezx4vONC0z-XErjxw-t500x500.jpg'},
        {text: 'You COOL, BROO!!', src:'https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'},
        {text: 'Hi! How are you?', src:'https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'},
    ]

    let postsElements = postData.map(post =>
        <Post texta={post.text}
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
                <button>Добавить</button>
            </div>
            <div className={st.posts}>
                {postsElements}
            </div>
        </div>
    )
}