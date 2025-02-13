import {postAPI} from "../../services/PostService";
import PostItem from "../PostItem/PostItem";
import './index.css'


const PostContainer = () => {
    const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(10)
    console.log(posts)
    return (
        <div>
            <div className="post__list">
                <button onClick={() => refetch()}>REFETCH</button>
                {isLoading && <h1>Loading...</h1>}
                {error && <h1>Error</h1>}
                {posts && posts.map((post:any) => <PostItem post={post} key={post.id} />)}
            </div>
        </div>
    )
}

export default PostContainer;