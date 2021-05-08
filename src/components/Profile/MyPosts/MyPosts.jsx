import React, { PureComponent } from 'react';
import s from './MyPosts.module.css';
import x from '../../Login/Login.module.css';
import Post from './Post/Post';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const MyPosts = React.memo((props) => {
    console.log('render yo');
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

})

const AddNewPostForm = (props) => {
    const initialValues = {
        newPostText: ''
    }
    const validationSchema = Yup.object({
        newPostText: Yup.string().required('Введи сообщение!')
    })
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
        >
            <Form>
                <Field
                    type='textarea'
                    name='newPostText'
                    id='message'
                    placeholder='введи мессагу'
                />
                <ErrorMessage name='newPostText'>
                    {errorMsg => <div className={x.error}>{errorMsg}</div>}
                </ErrorMessage>
                <div>
                    <button type="submit">Add post</button>
                </div>
            </Form>
        </Formik>
    )
}

export default MyPosts;