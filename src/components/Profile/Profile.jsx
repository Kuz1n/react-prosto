import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

function Profile() {
    return (
      <div className={s.content}>
        <div>
          <img className={s.fon} src='https://vsegda-pomnim.com/uploads/posts/2022-04/1649137083_18-vsegda-pomnim-com-p-pkhuket-priroda-foto-21.jpg'/>
        </div>
        <div>
          <img className={s.ava} src='https://papik.pro/uploads/posts/2022-01/1643605021_5-papik-pro-p-sobaka-logotip-5.jpg' />
        </div>
        <MyPosts/>
      </div>
    );
  }

export default Profile