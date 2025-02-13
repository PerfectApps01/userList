import {IPost} from "../../models/IPost";
import React, {FC} from "react";
import './index.css'


interface PostItemProps {
    post: IPost;
}

const PostItem: FC<PostItemProps> = ({post}) => {

    return (
        <div className="post">
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    )
}

export default PostItem;