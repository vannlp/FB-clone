import { InsertEmoticon, PhotoLibrary, Videocam } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, {useState} from "react";
import "./MessageSender.css";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import {addDoc, collection,Timestamp} from "firebase/firestore";

function MessageSender() {
    const [input, setInput] = useState('');
    
    const [imageUrl, setImageUrl] = useState('');
    const [{user}, dispatch] = useStateValue();


    const handleSubmit = async (e) => {
        e.preventDefault();
        let data = {
            message: input,
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
            timestamp: Timestamp.now()
        };

        let add = await addDoc(collection(db, 'posts'), data);


        setInput("")
        setImageUrl("")
    }


    return ( 
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input type="text"
                     placeholder="What's on your mind?" 
                     className="messageSender__input"
                     value={input}
                     onChange={e => setInput(e.target.value)}
                    />
                    <input 
                        placeholder="image URL" 
                        value={imageUrl}
                        onChange= {e => setImageUrl(e.target.value)}
                    />
                    <button type="submit" onClick={e => handleSubmit(e)}>Hidden Submit</button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <Videocam style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibrary style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>

            </div>
        </div>
     );
}

export default MessageSender;