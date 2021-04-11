import React, { Component } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { Formik, Form, Field } from 'formik';

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <label htmlFor='my-posts'>My posts</label>
            <AddNewPostForm onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const AddNewPostForm = (props) => {
    const initialValues = {
        newPostText: ''
    }
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
        >
            <Form>
                <Field
                    type='textarea'
                    name='newPostText'
                    id='message'
                    placeholder='введи мессагу'
                />
                <button type="submit">Add post</button>
            </Form>
        </Formik>
    )
}

export default MyPosts;