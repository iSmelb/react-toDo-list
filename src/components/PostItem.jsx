import react from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="content">
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className="post_btn">
                <MyButton onClick={() => props.remove(props.post)}>удалить</MyButton>
            </div>
        </div>
    )
}

export default PostItem