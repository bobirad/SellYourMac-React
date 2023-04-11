import './login.css'
import { Link } from "react-router-dom";
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase'
import { useNavigate } from 'react-router-dom';


export function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoggedIn(true);
                navigate('/catalog');
            })
            .catch((error) => {
                setLoggedIn(false);
                alert(error);
            })
    }

    return (
        <form className="login-form" onSubmit={handleLogin} >
            <h1>Log in</h1>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    minLength="6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="btn-container">
                <button type="submit" className="submit-btn btn">Login</button>
            </div>
            <Link className="link" to="/register">Don't have an account? Register here.</Link>

        </form>
    )
}