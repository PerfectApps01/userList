import {postAPI} from "../../services/PostService";
import PostItem from "../PostItem/PostItem";
import './index.css'
import {IPost} from "../../models/IPost";
import {IComment} from "../../models/IComment";


const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)
    const {data: comments} = postAPI.useFetchAllCommentsQuery(10)
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
    const [createComment] = postAPI.useCreateCommentMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()
    const [deleteComment, {}] = postAPI.useDeleteCommentMutation()

    const handleCreatePost = async () => {
        const title = prompt()
        const body = prompt() || '___'
        await createPost({title, body: body} as IPost)
    }

    const createCommentHandle = async (comment: IComment) => {
        await createComment(comment as IComment)
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }
    const handleRemovePost = async (post: IPost) => {
        await deletePost(post)
    }

    const handleRemoveComment = async (comment: IComment) => {
        await deleteComment(comment)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreatePost}>Add new post</button>
                {isLoading || (isCreateLoading && <h1>Loading...</h1>)}
                {createError && 'status' in createError && <h1>createError</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map((post: IPost, id: number) => <PostItem
                    update={handleUpdate}
                    remove={handleRemovePost}
                    removeComment={handleRemoveComment}
                    createNewComment={createCommentHandle}
                    commonId={id}
                    post={post}
                    key={post.id}/>)}
            </div>
        </div>
    )
}

export default PostContainer;