import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React, { Component } from 'react';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = () => {
    // let state = props.store.getState().dialogsPage;

    // let onSendMessageClick = () => {
    //     props.store.dispatch( sendMessageCreator() );

    // }
    // let onNewMessageChange = (body) => {
    //     props.store.dispatch( updateNewMessageBodyCreator(body) );
    // }

    return (<StoreContext.Consumer>
        { (store) => {

        let onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());

        }
        let onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
        }
        return <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={store.getState().dialogsPage} />}
    }
    </StoreContext.Consumer>)
}

export default DialogsContainer;