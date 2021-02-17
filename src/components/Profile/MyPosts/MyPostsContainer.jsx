import React, { Component } from 'react';
import { addPostActionCreator, updeteNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => { 
    let state = props.store.getState();
    
    let addPost = () => {
        props.store.dispatch( addPostActionCreator() );
    }

    let onPostChange = (text) => {
        let action = updeteNewPostTextActionCreator(text);
        props.store.dispatch( action ); 
    }

    return ( <MyPosts updateNewPostText={ onPostChange } addPost={ addPost } posts={ state.profilePage.posts } 
   newPostText={ state.profilePage.newPostText} /> )
}

export default MyPostsContainer;