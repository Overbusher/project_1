import st from "./Profile.module.css"
import {Preloader} from "../../../common/preloader/Preloader";


export const Profile = (props) => {
    // let postsElements = useMemo(() => {
    //     return props.postData.map(post =>
    //         <div key={post.id}>
    //             <img alt="ava img." src={post.src}/>
    //             {post.text}
    //         </div>)
    // }, [props.postData])

    // let newPostElement = React.createRef();

    // let onAddPost = () => {
    //     props.addPost();
    // }

    // let onIsChange = () => {
    //     let inputText = newPostElement.current.value;
    //     props.inputPost(inputText);
    // }

    // <textarea onChange={onIsChange} value={props.inputPostData} placeholder="Enter you"r post text"
    //           ref={newPostElement}/>

    let mainBody = (
    <div className={st.postsGrid}>
        <div className={st.avatar}>
            <img alt="avatar img."
                 src={props.userData?.photos.large ?? "https://cdn-icons-png.flaticon.com/512/6676/6676023.png"}/>
        </div>
        <div className={st.flname}>
            {props.userData?.fullName}
            <div>
                {!props.userData?.aboutMe ? null : "Описание: " + props.userData.aboutMe}
            </div>
            <div>
                {props.userData?.lookingForAJob ? "Ищу работу: " + props.userData.lookingForAJobDescription : null}
            </div>
        </div>
        <div className={st.posts}>
            Ссылки для связи:
            <div className={st.posts}>
                Личный веб-сайт: {props.userData?.contacts.github ?? "-"}
            </div>
            <div className={st.posts}>
                Фейсбук: {props.userData?.contacts.facebook ?? "-"}
            </div>
            <div className={st.posts}>
                Вк: {props.userData?.contacts.vk ?? "-"}
            </div>
            <div className={st.posts}>
                Твиттер: {props.userData?.contacts.twitter ?? "-"}
            </div>
            <div className={st.posts}>
                Инстаграмм: {props.userData?.contacts.instagram ?? "-"}
            </div>
            <div className={st.posts}>
                Github: {props.userData?.contacts.github ?? "-"}
            </div>

        </div>
    </div>)


    if (!props.userData || props.isFetching) {
        return <div><Preloader/></div>
    } else {
        return <div>{mainBody}</div>
    }
}