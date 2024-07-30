import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/login" id="loginbutton">Log in</Link>
            </div>
        </nav>
    );
}

export default Navbar