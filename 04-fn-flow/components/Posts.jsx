import { Post } from "./Post";

export function Posts(props) {
    const { posts, cb } = props
    return <div>
        {
            posts.map((post) => (
                <Post key={post.id} cb={() => cb(post.id)} name={post.name} />
            ))
        }
    </div>
}