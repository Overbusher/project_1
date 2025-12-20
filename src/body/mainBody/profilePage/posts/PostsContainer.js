import {addPostActionCreator, inputPostActionCreator} from "../../../../redux/profileReducer";
import {Posts} from "./Posts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        inputPostData : state.profilePage.inputPostData,
        postData : state.profilePage.postData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        isChange: (inputText) => {
            dispatch(inputPostActionCreator(inputText));
        }
    }
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)