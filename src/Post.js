import { AccountCircle, ChatBubbleOutline, ExpandMoreOutlined, NearMe, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";

function Post({ profilePic, image, username, timestamp, message, key }) {
    let date = new Date(timestamp.toDate());

    let dateString = date.toLocaleString();

    return ( 
        <div className="post" key={key}>
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar"/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{dateString}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            {image && (
                <div className="post__image">
                    <img src={image} alt=""/>
                </div>
            )}

            <div className="post__options">
                <div className="post__option">
                    <ThumbUp />
                    <p>Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutline />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                </div>
                <div className="post__option">
                    <AccountCircle />
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
     );
}

export default Post;