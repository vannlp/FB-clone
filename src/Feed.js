import React, { useEffect, useState } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "./firebase";
import { collection, doc, getDoc, getDocs, setDoc, onSnapshot } from "firebase/firestore"; 
function Feed() {
    const [posts, setPosts] = useState([]);
    const docs = collection(db, 'posts');

    useEffect (() => {
        
        const getData = async () => {
            onSnapshot(docs, (data) => {
                return setPosts(data.docs.map(doc => ({id: doc.id, data: doc.data()})))
            })
           
        }
        getData();
    }, [])


    return ( 
        <div className="feed">
            {/* StoryReel */}
            <StoryReel />
            {/* MessageSender */}
            <MessageSender />

            {/* <Post
                profilePic="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/284932835_754796968880193_6670059804672498555_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ObU8fyYqrLMAX_drD1w&_nc_ht=scontent.fsgn2-4.fna&oh=00_AT8Pp5FlwD0PKgCSIP27Bnebx1zPJXWBLg2Nt1cjZKVwoA&oe=62BA5EA2"
                username="phanvan0322"
                message="loaskfgsdjkgdsnvjuivo 98ghsdgddsuig gdsjaghszd ughsd 8gssugsdj"
                timestamp="hefiasf"
                image="https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/289102830_1792840357774752_5184792416357096462_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=jOU_lN93qowAX-SHAeg&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT-RjAph1kx7WlbksJcL8Exc1UsDaBPtS-ZWXM4ZOtpr-A&oe=62B97C1C"
            /> */}

            {posts && posts.map((val) => {

                return (
                    <>
                        <Post
                            key={val.id}
                            profilePic={val.data.profilePic}
                            username={val.data.username}
                            message={val.data.message}
                            timestamp={val.data.timestamp}
                            image={val.data.image}
                        />
                    </>
                )
            })}
        </div>
     );
}

export default Feed;