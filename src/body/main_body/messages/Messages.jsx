import st from './Messages.module.css'
import {Dialogs} from "./dialogs/Dialogs";

export const Messages = () => {

    let dialogsData =[
        {id: 1 , name: 'Diana'},
        {id: 2 , name: 'Vitaliy'},
        {id: 3 , name: 'Olga'},
        {id: 4 , name: 'Vera'},
        {id: 5 , name: 'Timofei'},
        {id: 6 , name: 'Vanya'}
    ]

    let dialogsElements = dialogsData.map(dialog =>
        <Dialogs name={dialog.name} id={dialog.id}/>
    )

    let messageData = [
       {id: 1 , message: 'Hi!!'},
       {id: 2 , message: 'How are you?'},
       {id: 3 , message: 'You are here!?'}
   ]


    return (
        <div className={st.msg}>
            <div>
                {dialogsElements}
            </div>
        <div className={st.messages}>
            <div className={st.messages}>Hi!!</div>
            <div className={st.messages}>How are you?</div>
            <div className={st.messages}>You are here?</div>
        </div>
        </div>
    )
}