import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React, { Component } from 'react';

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={ d.name } id={ d.id } /> )
    let messagesElements = props.state.messages.map( m => <Message message={ m.message } /> )

    let newMessageElement = React.createRef();
    let sendMessage = () => {
        alert(newMessageElement.current.value);
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
                        <textarea cols="15" rows="3" ref={ newMessageElement } ></textarea>
                    </div>
                    <div>
                        <button onClick={ sendMessage }> OK </button>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default Dialogs;