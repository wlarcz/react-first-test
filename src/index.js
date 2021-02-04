import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Andrew'},
  {id: 3, name: 'Sveta'},
  {id: 4, name: 'Sasha'},
  {id: 5, name: 'Viktor'},
  {id: 6, name: 'Valera'},
]

let messages = [
  {id: 1, message: 'Hi'},
  {id: 2, message: 'How is your zen?'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Yo'},
  {id: 5, message: 'Yo'},
  {id: 6, message: 'Yo'},
]

let posts = [
  {id: 1, message: 'Эйё, че как оно?', likesCount: 12},
  {id: 2, message: 'Первая мессага', likesCount: 11},
  {id: 3, message: 'Вторая мессага', likesCount: 0},
  {id: 4, message: 'Третья мессага', likesCount: -1},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={ posts } dialogs={ dialogs } messages={ messages } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
