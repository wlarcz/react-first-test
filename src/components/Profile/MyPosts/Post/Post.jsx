import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://i.pinimg.com/originals/8b/13/fd/8b13fd45e5a11ce6a173d920ff2a4dea.jpg" alt="" />
                {props.message};
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;