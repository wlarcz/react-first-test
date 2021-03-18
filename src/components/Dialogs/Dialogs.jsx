import { NavLink, Redirect } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React, { Component } from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={ d.name } key={ d.id } id={ d.id } /> )
    let messagesElements = state.messages.map( m => <Message message={ m.message } key={ m.id }/> )
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
                { dialogsElements }
            </div>

            <div className={s.messages}>
                { messagesElements }
                <div>
                    <div>
                        <textarea placeholder='Введи сюда сообщение'
                        onChange={ onNewMessageChange }
                        ref={ newMessageElement }
                        value={ newMessageBody } ></textarea>
                    </div>
                    <div>
                        <button onClick={ onSendMessageClick } > Отправить </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;