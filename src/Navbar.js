import { Route, Routes, Link } from "react-router-dom";
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Profile } from './pages/Profile';
import { AddListing } from './pages/AddListing';
import { firebaseApp } from './config/firebase';
export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <div className="logo">Used Apple Devices</div>
                <div className="divider"></div>
                <ul>
                    <li>
                        <Link to="/" className="nav-link">home</Link>
                    </li>
                    <li>
                        <Link to="/catalog" className="nav-link">catalog</Link>
                    </li>
                    <li>
                        <Link to="/addlisting" className="nav-link">sell an item</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="nav-link">profile</Link>
                    </li>
                    <li>
                        <Link to="/login" className="nav-link">log in</Link>
                    </li>
                    <li>
                        <button onClick={() => firebaseApp.signOut()} className="nav-link">log out</button>
                    </li>
                    <li>
                        <Link to="/register" className="nav-link">register</Link>
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