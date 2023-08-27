import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (

        <div className={s.posts}>
          <div>
            <textarea></textarea>
            <button>Send</button>
            <button>1234</button>
          </div>
          <Post message='Hi, how are you?' likeCount='15'/>
          <Post message='My first post' likeCount='10'/>
        </div>

    );
  }

export default MyPosts