import {IPost} from "../../models/IPost";
import React, {FC} from "react";
import './index.css'
import {IComment} from "../../models/IComment";


interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    removeComment: (comment: IComment) => void;
    update: (post: IPost) => void;
    createNewComment: (newComment: IComment) => void;
    commonId: number;
}

const PostItem: FC<PostItemProps> = ({post, remove, removeComment, update, commonId, createNewComment}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post);
    }

    const handleRemoveComment = (comment: IComment) => {
        removeComment(comment);
    }

    const handleUpdate = () => {
        const title = prompt() || ""
        const body = prompt() || ""
        update({...post, title, body})
    }

    const createComment = (event: React.MouseEvent) => {
        event.stopPropagation()
        const comment = prompt() || ""
        createNewComment({text: comment, postId: post.id.toString()} as IComment)
    }
    return (
        <div onClick={handleUpdate} className="post">
            <h2>Title: {post.title}</h2>
            <h2>Body: {post.body}</h2>
            <button onClick={handleRemove}>Delete post</button>
            <button onClick={createComment}>Create a comment</button>
            {post.comments.length !== 0 && <h2>Comments:</h2>}
            {post.comments.map((comment: IComment) =>
                <div>
                    <h3 key={comment.id}>{comment.text}</h3>
                    <button onClick={() => handleRemoveComment(comment)}>Delete</button>
                </div>)}
        </div>
    )
}

export default PostItem;