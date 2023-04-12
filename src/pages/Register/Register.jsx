import './register.css'
import { Link, Navigate } from "react-router-dom";
import { useState } from 'react';
import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repass, setRepass] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        if(password !== repass){
            alert('Passwords dont match');
            return;
        }
        try {
            createUserWithEmailAndPassword(auth, email, password)
            setLoggedIn(true);
            navigate('/');

        } catch (error) {
            setLoggedIn(false);
            alert(error);
        }
    }
    if(loggedIn){
        return (
            <Navigate to="/catalog" />
        )
    } 
    return (
        <form className="register-form" onSubmit={handleRegister}>
            <h1>Register</h1>
            <div className="form-group">
                <label htmlFor="username">Email:</label>
                <input type="email"
                name="email" 
                placeholder="Enter your email address" 
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password"
                name="password" 
                placeholder="Enter your password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                minLength="6" />
            </div>
            <div className="form-group">
                <label htmlFor="repass">Confirm Password:</label>
                <input type="password"
                name="password" placeholder="Confirm your password"
                required
                value={repass}
                onChange={(e) => setRepass(e.target.value)}
                minLength="6" />
            </div>
            <div className="btn-container">
                <button  type="submit" className="register-btn btn">Register</button>
            </div>
            <Link className="link" to="/login">Already have an account? Log in here.</Link>
        </form>
    )
}

