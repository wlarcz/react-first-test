import React, { Component } from 'react';
import { addPostActionCreator, updeteNewPostTextActionCreator } from '../../../redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

    // let state = props.store.getState();

    // let addPost = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }

    // let onPostChange = (text) => {
    //     let action = updeteNewPostTextActionCreator(text);
    //     props.store.dispatch(action);
    // }

    return (
        <StoreContext.Consumer> 
            { (store) => {
                let state = store.getState();

                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                let onPostChange = (text) => {
                    let action = updeteNewPostTextActionCreator(text);
                    store.dispatch(action);
                }
                return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={store.getState().profilePage.posts}
                    newPostText={store.getState().profilePage.newPostText} />
            }
        }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;