import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
      <div>
        <ProfileInfo />
        <MyPosts props={props.props}/>
      </div>
    );
  }

export default Profile