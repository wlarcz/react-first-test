import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            {/* <div className={ s.mainImage }>
                <img src="http://www.passagemepassaporte.com/wp-content/uploads/2016/02/jamaica-3.jpg" alt='картинка' />
            </div> */}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                <ProfileStatus status={ props.status } updateStatus={ props.updateStatus } />
            </div>
        </div>
    )
}

export default ProfileInfo;