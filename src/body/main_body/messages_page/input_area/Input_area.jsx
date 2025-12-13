import st from "./Input_area.module.css"

export const InputArea = () => {
    return (
        <div className={st.input_area}>
            <textarea></textarea>
            <button>Отправить</button>
        </div>
    )
 }