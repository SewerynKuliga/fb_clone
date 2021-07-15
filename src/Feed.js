import React from 'react';
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic="https://avatars.githubusercontent.com/u/81814080?s=400&u=a92551701bc5e89122dbe2265aced16a710813da&v=4"
                message="Wow, this works!"
                timestamp="This is a timestamp"
                username="Seweryn Kuliga"
                image="https://armaanparikh.com/wp-content/uploads/2021/04/code.png"
            />
            <Post />
            <Post />
        </div>
    )
}

export default Feed;
