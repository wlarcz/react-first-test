import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
    <div>
        my posts
        <div>
            <textarea></textarea>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Эйё, че как оно?' likesCount='0'/>
            <Post message='Первая мессага' likesCount='23'/>
        </div>
    </div>
    )
}

export default MyPosts;