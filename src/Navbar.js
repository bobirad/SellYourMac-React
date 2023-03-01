export default function Navbar() {
    return (
        <nav className="navbar">
        <div className="logo">Used Apple Devices</div>
        <div className="divider"></div>
        <ul>
            <li>
                <a href="/" className="nav-link">home</a>
            </li>
            <li>
                <a href="/catalog" className="nav-link">catalog</a>
            </li>
            <li>
                <a href="/create" className="nav-link">sell an item</a>
            </li>
            <li>
                <a href="/profile" className="nav-link">profile</a>
            </li>
            <li>
                <a href="/login" className="nav-link">login</a>
            </li>
            <li>
                <a href="/logout" className="nav-link">logout</a>
            </li>
        </ul>
    </nav>
    )
}