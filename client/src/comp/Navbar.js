const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>My Website</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Note</a>
                <a href="/idonow">About</a>
                <a href="/login" id="loginbutton">Log in</a>
            </div>
        </nav>
    );
}

export default Navbar