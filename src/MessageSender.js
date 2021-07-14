import { Avatar } from '@material-ui/core';
import React from 'react';
import "./MessageSender.css";

function MessageSender() {
    return (
        <div className="massageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input
                        className="messageSender__input"
                        placeholder={"What's on your mind"} />
                    <input type="text" />
                </form>
            </div>
            <div className="messageSender__bottom">

            </div>
        </div>
    )
}

export default MessageSender;
