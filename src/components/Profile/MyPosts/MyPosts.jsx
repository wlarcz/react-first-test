import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message='Эйё, че как оно?' likesCount='0' />
                <Post message='Первая мессага' likesCount='23' />
            </div>
        </div>
    )
}

export default MyPosts;