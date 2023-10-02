import { rerenderEntireTree } from "../render";

let state = {
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
  }

export let addPost = () => {
  let newPost = {
    id: 6,
    message: state.profilePage.newPostText,
    likeCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updatePostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export default state;