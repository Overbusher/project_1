import st from './Message.module.css'

export const Message = (props) => {
    // const location = useLocation();
    // const ident ="/message/" + ' ' + props.id;
    // console.log(ident);
    return (
        <div className={st.message}>
            <li>{props.message}</li>
        </div>
    )
}