import "./navbar.scss"

export const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <a href="#">E-commerce</a>
            </div>
            <div className="navbar__categories">
                <a href="#">Sport</a>
                <a href="#">Casual</a>
            </div>
        </nav>
    )
}