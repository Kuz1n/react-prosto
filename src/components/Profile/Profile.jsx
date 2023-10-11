import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
      <div>
        <ProfileInfo />
        <MyPosts props={props.props} dispatch={props.dispatch} />
      </div>
    );
  }

export default Profile