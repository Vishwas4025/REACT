import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" style={{ marginRight: "50px" }}>Home</Link>
            <Link to="/register" style={{ marginRight: "50px" }}>Register</Link>
            {/* <Link to="/login" style={{ marginRight: "50px" }}>Login</Link> */}
            <Link to="/admin" style={{ marginRight: "50px" }}>Admin</Link>
            <Link to="/hr" style={{ marginRight: "50px" }}>HR</Link>
            
        </nav>
    );
};

export default Navbar;
