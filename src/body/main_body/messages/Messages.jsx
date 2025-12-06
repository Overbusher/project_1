import st from './Messages.module.css'
import {Dialogs} from "./dialogs/Dialogs";

export const Messages = (props) => {
    return (
        <div className={st.msg}>
            <div>
            <Dialogs name="Diana" id="1"/>
            <Dialogs name="Timofey" id="2"/>
            <Dialogs name="Vanya" id="3"/>
            <Dialogs name="Igor" id="4"/>
            <Dialogs name="Olga" id="5"/>
            <Dialogs name="Vitaliy" id="6"/>
            <Dialogs name="Vera" id="7"/>
            </div>
        <div className={st.messages}>
            <div className={st.messages}>Hi!!</div>
            <div className={st.messages}>How are you?</div>
            <div className={st.messages}>You are here?</div>
        </div>
        </div>
    )
}