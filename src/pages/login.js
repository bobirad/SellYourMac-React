import './login.css'
import { Link } from "react-router-dom";


export function Login() {
    return (
        <form class="login-form" action="process-login.php" method="POST">
            <h1>Log in</h1>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="text" name="email" placeholder="Enter your email address" required email />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required minlength="6" />
            </div>
            <div class="btn-container">
                <button type="submit" class="submit-btn btn">Login</button>
            </div>
            <Link class="link" to="/register">Don't have an account? Register here.</Link>

        </form>

    )
}