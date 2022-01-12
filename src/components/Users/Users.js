import {useEffect, useState} from "react";

import {getUsers} from "../../API/API";
import User from "./User/User";

export default function Users() {

    let [users, setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(res => setUsers(res.data));
    },[])
    return (
        <div>
            {
                users.map(value => <User item={value}/>)
            }
        </div>
    )
}
