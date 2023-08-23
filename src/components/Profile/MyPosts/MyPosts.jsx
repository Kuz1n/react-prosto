import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (

        <div className={s.posts}>
          <div>
            <textarea></textarea>
            <button>asd</button>
            <button>123</button>
          </div>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
        </div>

    );
  }

export default MyPosts