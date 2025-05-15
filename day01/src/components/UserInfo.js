import axios from 'axios';
import { useEffect, useState } from 'react';

const UserInfo=()=>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((response)=>setUsers(response.data))
            .catch((e)=>console.log("error fetching data"));

    },[]);

    return (
        <div>
            <h1>Users</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserInfo;