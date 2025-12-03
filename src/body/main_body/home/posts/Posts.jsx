import st from './Posts.module.css'

export const Posts = () => {
    return (
        <div className={st.posts}>
            <div>
                Посты:
            </div>
            <div>
                <textarea></textarea>
                <button>Добавить</button>
            </div>
            <div>
                <img alt="ava img."
                     src='https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'/>
                Hi! How are you?
            </div>
            <div>
                <img alt="ava img."
                     src='https://png.klev.club/uploads/posts/2024-04/png-klev-club-vrj4-p-avatarka-png-28.png'/>
                You COOL, BROO!!
            </div>
            <div>
                <img alt="ava img."
                     src='https://i1.sndcdn.com/artworks-zQNVURezx4vONC0z-XErjxw-t500x500.jpg'/>
                LIGHT WEIGHT, BABY!!!
            </div>
            <div>
                <img alt="ava img."
                     src='https://assetsio.gnwcdn.com/elder-scrolls-skyrim-artwork.jpg?width=1200&height=1200&fit=crop&quality=100&format=png&enable=upscale&auto=webp'/>
                FUS RO DAH!
            </div>
        </div>
    )
}