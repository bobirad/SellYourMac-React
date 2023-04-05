import { Route, Routes, Link, Navigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog';
import { Login } from './pages/LogIn/Login';
import { Register } from './pages/Register/Register';
import { Profile } from './pages/Profile/Profile';
import { AddListing } from './pages/AddListing/AddListing';
import { PrivateRoutes } from './components/PrivateRouts';
import { auth } from './config/firebase';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
          if (user) {
            setLoggedIn(true);
            navigate('/');
          } else {
            setLoggedIn(false);
          }
        });
      }, []);

    const handleLogOut = (event) => {
        event.preventDefault();
        auth.signOut()
        .then(() => {
            setLoggedIn(false);
            navigate('/login');
        }).catch((error) => {
            alert(error);
        });
        

    }
    
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
                    {loggedIn ? (
                        <>
                            <li>
                                <Link to="/addlisting" className="nav-link">sell an item</Link>
                            </li>
                            <li>
                                <Link to="/profile" className="nav-link">profile</Link>
                            </li>
                            <li>
                                <Link onClick={handleLogOut} className="nav-link">log out</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="nav-link">log in</Link>
                            </li>
                            <li>
                                <Link to="/register" className="nav-link">register</Link>
                            </li>
                        </>
                    )}

                </ul>
            </nav>
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route path="/catalog" element={<Catalog />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/addlisting" element={<AddListing />} />
                </Route>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element="Not Found" />
            </Routes>
        </>
    )
}