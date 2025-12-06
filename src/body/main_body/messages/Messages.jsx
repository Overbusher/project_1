import st from './Messages.module.css'

export const Messages = () => {
    return (
        <div className={st.msg}>
        <div className={st.dialogs}>
            <div className={st.active}>Diana</div>
            <div>Timofey</div>
            <div>Igor</div>
            <div>Vanya</div>
        </div>
        <div className={st.messages}>
            <div>Hi!!</div>
            <div>How are you?</div>
            <div>You are here?</div>
        </div>
        </div>
    )
}