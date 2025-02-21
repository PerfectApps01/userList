import {IPost} from "../../models/IPost";
import React, {FC} from "react";
import './index.css'


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

    return (
        <div className="post">
            {post.id}. {post.title}
            <button>Delete</button>
        </div>
    )
}

export default PostItem;