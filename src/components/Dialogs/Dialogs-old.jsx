import { NavLink, Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React, { Component } from 'react';
import { Formik, Form, Field } from 'formik';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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
                // onChange={onNewMessageChange}
                //     ref={newMessageElement}
                //     value={newMessageBody}
                //     sendMessageClick={onSendMessageClick}
                />
                {/* <div>
                    <div>
                        <textarea placeholder='Введи сюда сообщение'
                        onChange={ onNewMessageChange }
                        ref={ newMessageElement }
                        value={ newMessageBody } ></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick } > Отправить </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

const AddMessageForm = (props) => {
    const initialValues = {
        messageText: ''
    }
    const onSubmit = (values) => {
        console.log(values)
    }
    return (
        <Formik
        initialValues={ initialValues }
        onSubmit={ onSubmit }
        >
            <Form>
                <Field
                    type='text'
                    name='messageText'
                    id='message'
                />
                <button type="submit"> Отправить </button>
            </Form>
        </Formik>
    )
    // // <div>
    // <div>
    //              <textarea placeholder='Введи сюда сообщение'
    //             onChange={props.onNewMessageChange}
    //             ref={props.newMessageElement}
    //             value={props.newMessageBody} ></textarea>
    //     </div>
    // <div>
    //     <button onClick={props.onSendMessageClick} > Отправить </button>
    // </div>
    // </div>

}

export default Dialogs;