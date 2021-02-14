import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React, { Component } from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/state';

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={ d.name } id={ d.id } /> )
    let messagesElements = state.messages.map( m => <Message message={ m.message } /> )
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();
    let onSendMessageClick = () => {
        props.store.dispatch( sendMessageCreator() );

    }
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch( updateNewMessageBodyCreator(body) );
    }

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