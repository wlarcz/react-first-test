import { NavLink, Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import x from '../Login/Login.module.css';
import Message from './Message/Message';
import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody;
    let newMessageElement = React.createRef();

    const addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <AddMessageForm
                onSubmit={ addNewMessage }
                />
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    const initialValues = {
        newMessageBody: ''
    }
    const validationSchema = Yup.object({
        newMessageBody: Yup.string().required('Введи сообщение')
    })
    return (
        <Formik
        initialValues={ initialValues }
        onSubmit={ props.onSubmit }
        validationSchema = { validationSchema }
        >
            <Form>
                <Field
                    type='text'
                    name='newMessageBody'
                    id='message'
                    placeholder='введи мессагу'
                />
                <ErrorMessage name='newMessageBody'>
                    { errorMsg => <div className={x.error}>{ errorMsg }</div> }
                </ErrorMessage>
                <button type="submit"> Отправить </button>
            </Form>
        </Formik>
    )
}

export default Dialogs;