import reportWebVitals from './reportWebVitals';
import state, { subsrcibe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, updateNewPostText } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={ state } addPost={ addPost } updateNewPostText={ updateNewPostText }/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}



rerenderEntireTree(state);

subsrcibe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
