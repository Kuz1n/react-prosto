import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
      <div>
        <ProfileInfo />
        <MyPosts props={props.props} addPost={props.addPost} updatePostText={props.updatePostText}/>
      </div>
    );
  }

export default Profile