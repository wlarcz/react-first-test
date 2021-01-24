import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src="http://www.passagemepassaporte.com/wp-content/uploads/2016/02/jamaica-3.jpg" />
        </div>
        <div>
            ava + description
        </div>
        <div>
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <div className={s.item}>post 1</div>
                <div className='item'>post 2</div>
            </div>
        </div>
    </div>
}

export default Profile;