import logo from './logo.svg';
import './App.css';
import Users from "./components/Users/Users";
import {useEffect, useState} from "react";
import {getComponents, getPosts, getUsers} from "./API/Axios-get-API";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    let [users, setUsers] = useState([]);
    let [postDetails, setpostDetails] = useState(null);
    let [posts, setPosts] = useState([]);
    let [comments, setComments] = useState([]);
    useEffect(() => {
        getPosts().then(response =>
            setPosts(response.data));
        getUsers().then(res =>
            setUsers(res.data))
        getComponents().then(r => setComments(r.data))
    }, [])

    return (
        <div className="App">
            <div className="users-and-posts">
                <div className="w-50">{
                    users.map(value => <Users item={value}/>)
                }</div>
                <div className="w-50">{
                    posts.map(value => <Posts item={value}/>)
                }</div>
            </div>
            <div>
                {
                    comments.map(value => <Comments item={value}/>)
                }
            </div>
        </div>
    );
}

export default App;
