import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link className="nav-link" to="/" style={{ marginRight: "50px" }}>Home</Link>
            <Link className="nav-link" to="/register" style={{ marginRight: "50px" }}>Register</Link>
            <Link className="nav-link" to="/login" style={{ marginRight: "50px" }}>Admin</Link>
            <Link className="nav-link" to="/login" style={{ marginRight: "50px" }}>HR</Link>

            {/* <Link to="/login" style={{ marginRight: "50px" }}>Login</Link> */}
            {/* <Link to="/admin" style={{ marginRight: "50px" }}>Admin</Link>
            <Link to="/hr" style={{ marginRight: "50px" }}>HR</Link> */}
            
        </nav>
    );
};

export default Navbar;
