import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    
    let posts = [
        {id: 1, message: 'Эйё, че как оно?', likesCount: 12},
        {id: 2, message: 'Первая мессага', likesCount: 11},
        {id: 3, message: 'Вторая мессага', likesCount: 0},
        {id: 4, message: 'Третья мессага', likesCount: -1},
    ]
    
    let postsElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            
            <div className={s.posts}>
            { postsElements }
            </div>
        </div>
    )
}

export default MyPosts;