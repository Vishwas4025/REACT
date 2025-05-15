import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage=()=>{
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username : "",
        password : "",
        role : "",
    })

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setUser({
            ...user,
            [name] : value,
        })
    }

    const handleClick=(e)=>{
        e.preventDefault();
        if(user.username==="Admin" && user.password==="Admin" && user.role==="Admin"){
            navigate("/admin");
        }
        else if(user.username==="HR" && user.password==="HR" && user.role==="HR"){
            navigate("/hr");
        }

    }

    return(
        <div>
            <h2>Login</h2>
            <form>
                <div>
                    <label>username : </label>
                    <input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="username"
                    />
                </div>

                <div>
                    <label>password : </label>
                    <input
                        type="text"
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="password"
                    />
                </div>

                <div>
                    <label>role : </label>
                    <select
                        name="role"
                        value={user.role}
                        onChange={handleChange}
                    >
                        <option value={"select"} >select role</option>
                        <option value={"Admin"} >Admin</option>
                        <option value={"HR"} >HR</option>
                    </select>
                        
                </div>

                <button onClick={handleClick}>Log in</button>
                
            </form>
        </div>
    )
}

export default LoginPage;