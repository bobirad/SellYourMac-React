import './register.css'
import { Link } from "react-router-dom";

export function Register() {
    return (
        <form class="register-form" action="process-login.php" method="POST">
            <h1>Register</h1>
            <div class="form-group">
                <label for="username">Email:</label>
                <input type="text" id="email" name="email" placeholder="Enter your email address" required email />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required minlength="6" />
            </div>
            <div class="form-group">
                <label for="repass">Confirm Password:</label>
                <input type="password" id="password" name="password" placeholder="Confirm your password" required minlength="6" />
            </div>
            <div class="btn-container">
                <button  class="register-btn btn">Register</button>
            </div>
            <Link class="link" to="/login">Already have an account? Log in here.</Link>
        </form>
    )
}