import {postAPI} from "../../services/PostService";
import PostItem from "../PostItem/PostItem";
import './index.css'
import {IPost} from "../../models/IPost";


const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(10)
    const [createPost, {error: createError, isLoading: isCreateLoading}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleCreatePost = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const handleUpdate = async (post: IPost) => {
        await updatePost(post)
    }
    const handleRemove = async (post: IPost) => {
        await deletePost(post)
    }

    return (
        <div>
            <div className="post__list">
                <button onClick={handleCreatePost}>Add new post</button>
                {isLoading || (isCreateLoading && <h1>Loading...</h1>)}
                {createError && 'status' in createError && <h1>createError</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map((post: any) => <PostItem
                    update={handleUpdate}
                    remove={handleRemove}
                    post={post}
                    key={post.id}/>)}
            </div>
        </div>
    )
}

export default PostContainer;