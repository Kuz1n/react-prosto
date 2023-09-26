import s from './MyPosts.module.css';
import Post from './Post/Post';




function MyPosts(props) {

  let postsElements = props.props.posts.map( (p) => <Post message={p.message} likeCount={p.likeCount}/> )

    return (

        <div className={s.posts}>
          <div>
            <textarea></textarea>
            <button>Send</button>
          </div>
          {postsElements}
        </div>

    );
  }

export default MyPosts