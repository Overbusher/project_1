import st from './Posts.module.css'
import {Post} from "./post/Post";


export const Posts = () => {
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
                <Post texta='FUS RO DAH!'
                      srcs='https://assetsio.gnwcdn.com/elder-scrolls-skyrim-artwork.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp'/>
                <Post texta='LIGHT WEIGHT, BABY!!!'
                      srcs='https://i1.sndcdn.com/artworks-zQNVURezx4vONC0z-XErjxw-t500x500.jpg'/>
                <Post texta='You COOL, BROO!!'
                      srcs='https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'/>
                <Post texta='Hi! How are you?'
                      srcs='https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'/>
            </div>
        </div>
    )
}