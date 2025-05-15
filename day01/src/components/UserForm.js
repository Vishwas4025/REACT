import { useState } from "react";

const UserForm=()=>{

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () => {
        const emailPattern = /^[a-zA-Z_.]+@[a-zA-Z]+\.[a-zA-Z]{2,}$/;
        const usernamePattern = /^[a-zA-Z][a-zA-Z0-9]*$/;
        const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|?><])[a-zA-Z0-9!@#$%^&*()_+|?><]{8}$/;

        if (!emailPattern.test(email)) {
        setError("Invalid email format");
        return;
        }

        if (!usernamePattern.test(username)) {
        setError("Username must contain only letters and numbers");
        return;
        }

        if (!passwordPattern.test(password)) {
        setError("Password must be 8 characters and include a letter, digit, and special character");
        return;
        }

        setError("");
        setMessage("login successfull")
    };

    return (
        <div>
            <h2>Sign Up Page</h2>
            <div>
                <input
                    name="email"
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    placeholder="email"
                />
                <br/>
                <input
                    name="username"
                    onChange={(e)=>setUsername(e.target.value)}
                    value={username}
                    placeholder="username"
                />
                <br/>
                <input
                    name="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    placeholder="password"
                />
                <br/>
                <button onClick={handleSubmit}>
                    submit
                </button>
                <br/>
                {error && <p style={{ color: "red" }}>{error}</p>}
                {message && <p>{message}</p>}
                
            </div>
        </div>
        
    )
}

export default UserForm;