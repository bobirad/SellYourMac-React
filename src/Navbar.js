import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Home } from './pages/Home/Home'
import { Catalog } from './pages/Catalog/Catalog';
import { Login } from './pages/LogIn/Login';
import { Register } from './pages/Register/Register';
import { Profile } from './pages/Profile/Profile';
import { AddListing } from './pages/AddListing/AddListing';
import { ListingDetails } from './pages/ListingDetails/ListingDetails';
//import { PrivateRoute } from './components/auth/PrivateRoute';
import { auth } from './config/firebase';
import { useNavigate } from 'react-router-dom';
import { EditListing } from "./pages/EditListing/EditListing";
import { DeleteListing } from "./pages/DeleteListing/DeleteListing";


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
                <div>

                <ul>
                    <li>
                        <Link to="/" className="nav-link">
                            <button>home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/catalog" className="nav-link">
                            <button>catalog</button>
                        </Link>
                    </li>
                    {loggedIn ? (
                        <>
                            <li>
                                <Link to="/addlisting" className="nav-link">
                                    <button>sell an item</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/profile" className="nav-link">
                                    <button>profile</button>
                                </Link>
                            </li>
                            <li>
                                <Link  className="nav-link">
                                    <button onClick={handleLogOut}>log out</button>
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/login" className="nav-link">
                                    <button>log in</button>
                                </Link>
                            </li>
                            <li>
                                <Link to="/register" className="nav-link">
                                    <button>register</button>
                                </Link>
                            </li>
                        </>
                    )}

                </ul>
                </div>

            </nav>
            <Routes>
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/catalog/:id" element={<ListingDetails />} />            
                <Route path="/catalog/:id/edit" element={<EditListing />} />
                <Route path="/catalog/:id/delete" element={<DeleteListing />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/addlisting" element={<AddListing />} />
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element="Not Found" />
            </Routes>
        </>
    )
}