import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/greeting" style={{ marginRight: "50px" }}>Greeting</Link>
            <Link to="/counter" style={{ marginRight: "50px" }}>Counter</Link>
            <Link to="/userinfo" style={{ marginRight: "50px" }}>User Info</Link>
            <Link to="/conditionalrender" style={{ marginRight: "50px" }}>Show/Hide</Link>
            <Link to="/calculator" style={{ marginRight: "50px" }}>Calculator</Link>
            <Link to="/userform" style={{ marginRight: "50px" }}>UserForm</Link>
        </nav>
    );
};

export default Navbar;
