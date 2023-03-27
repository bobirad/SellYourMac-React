import { Route, Routes } from "react-router-dom";
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { AddListing } from './pages/AddListing'
export default function Navbar() {
    return (
        <>
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
                        <a href="/addlisting" className="nav-link">sell an item</a>
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
                    <li>
                        <a href="/register" className="nav-link">register</a>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addlisting" element={<AddListing />} />
                <Route path="*" element="Not Found" />
            </Routes>
        </>
    )
}