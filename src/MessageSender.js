import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import MoodIcon from '@material-ui/icons/Mood';

function MessageSender() {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src="https://avatars.githubusercontent.com/u/81814080?s=400&u=a92551701bc5e89122dbe2265aced16a710813da&v=4" />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={"What's on your mind?"} />

                    <input placeholder="image URL (optional)" />

                    <button onClick={handleSubmit} type="submit" >
                        Hidden submit
                    </button>

                </form>
            </div>

            <div className="messageSender__bottom">

                <div className="messegeSender__option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>

                <div className="messegeSender__option">
                    <PhotoLibraryIcon style={{ color: "green" }} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messegeSender__option">
                    <MoodIcon style={{ color: "orange" }} />
                    <h3>Feeling/Acivity</h3>
                </div>

            </div>
        </div>
    )
}

export default MessageSender;
