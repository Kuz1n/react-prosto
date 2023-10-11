import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreator, uprateNewPostTextActionCreator } from '../../../redux/state';



function MyPosts(props) {

  let postsElements = props.props.posts.map( (p) => <Post message={p.message} likeCount={p.likeCount}/> );

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(uprateNewPostTextActionCreator(text));
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