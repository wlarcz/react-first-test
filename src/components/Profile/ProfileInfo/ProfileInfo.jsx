import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="http://www.passagemepassaporte.com/wp-content/uploads/2016/02/jamaica-3.jpg" alt='картинка' />
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;