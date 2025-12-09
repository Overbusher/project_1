import {useLocation} from "react-router-dom";

export const Message = (props) => {
    const location = useLocation();
    // console.log(props);
    const ident ="/message/" + ' ' + props.id;
    console.log(ident);
    return (
        <div>
            Hi!
        </div>
    )
}