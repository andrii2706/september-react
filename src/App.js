import './App.css';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div>
            <div className="users-and-posts">
                <div className="w-50" ><Users/></div>
                <div className="w-50"><Posts/></div>
            </div>
            <Comments/>
        </div>
    );
}

export default App;
