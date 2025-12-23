import st from './FUsers.module.css'
import {FUser} from "./FUser/FUser";

export const FUsers = (props) => {
    let Users = props.usersData.map(user =><FUser id={user.id}
                                                   fname={user.fname}
                                                   lname={user.lname}
                                                   country={user.country}
                                                   city={user.city} />)
    return (
        <div className={st.fUser}>{Users}</div>
    )
}