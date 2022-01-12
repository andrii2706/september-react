import {useEffect, useState} from "react";

import {getComponents, } from "../../API/API";
import Comment from "./Comment/Comment";

export default function Comments() {

    let [comments, setComments] = useState([])

    useEffect(()=>{
        getComponents().then(res => setComments(res.data));
    },[])
    return (
        <div>
            {
                comments.map(value => <Comment item={value}/>)
            }
        </div>
    )
}
