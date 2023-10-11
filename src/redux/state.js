const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
  _state: {
    messagesPage: {
        dialogs: [
            {name: 'Саша', id:'1'},
            {name: 'Димыч', id:'2'},
            {name: 'Александр', id:'13'},
            {name: 'Саша', id:'4'},
            {name: 'Саша', id:'5'},
            {name: 'Саша', id:'6'}
          ],
          messages: [
            {text: 'Hi', id: '1'},
            {text: 'Hello', id: '2'},
            {text: 'Yo', id: '3'},
            {text: 'Hello', id: '4'},
            {text: 'Hello', id: '5'},
            {text: 'Yo', id: '6'}
          ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likeCount: '4'},
            {id: 2, message: 'qweqwewq', likeCount: '5'},
            {id: 3, message: 'tsaddv', likeCount: '7'},
            {id: 4, message: 'asczxc', likeCount: '9'},
            {id: 5, message: '2', likeCount: '10'}
          ],
        newPostText: 'hardcode'
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; // observer
  },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 6,
        message: this._state.profilePage.newPostText,
        likeCount: 0
      }
    
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
      
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const uprateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  })


export default store;