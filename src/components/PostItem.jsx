import react from "react";

const PostItem = (props) => {

    return (
        <div className="post">
            <div className="content">
                <strong>{props.number}. {props.post.title}</strong>
                <div>
                {props.post.body}
                </div>
            </div>
            <div className="post_btn">
                <button>удалить</button>
            </div>
        </div>
    )
}

export default PostItem