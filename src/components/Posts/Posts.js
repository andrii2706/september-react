import {useEffect, useState} from "react";

import {getPosts} from "../../API/API";

import Post from "./Post/Post";

export default function Posts() {
    let [posts, setPosts] = useState([]);
    useEffect(()=>{
        getPosts().then(res => setPosts(res.data));
    },[])
    return (
        <div>
            {
                posts.map(value => <Post item={value}/>)
            }
        </div>
    )
}
