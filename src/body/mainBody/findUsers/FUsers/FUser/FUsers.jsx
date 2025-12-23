import st from './FUsers.module.css'
import {FUser} from "./FUser/FUser";

export const FUsers = (props) => {
    let Users = props.usersData.map(user => <FUser id={user.id}
                                                   fName={user.fName}
                                                   lName={user.lName}
                                                   country={user.country}
                                                   city={user.city}
                                                   description={user.description}
                                                   followed={user.followed}
                                                   follow={props.follow}
                                                   unfollow={props.unfollow}/>)
    return (
        <div className={st.fUser}>{Users}</div>
    )
}