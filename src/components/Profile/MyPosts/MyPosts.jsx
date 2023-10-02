import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';




function MyPosts(props) {

  let postsElements = props.props.posts.map( (p) => <Post message={p.message} likeCount={p.likeCount}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updatePostText(text);
  }

    return (

        <div className={s.posts}>
          <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.props.newPostText}/>
            <button onClick={ addPost }>Send</button>
          </div>
          {postsElements}
        </div>

    );
  }

export default MyPosts;