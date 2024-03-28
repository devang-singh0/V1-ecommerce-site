import './register.scss'
export function Register() {
    function goLogin() {
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        loginForm.style.display = 'block'
        signupForm.style.display = 'none'
    }
    function goSign() {
        const loginForm = document.getElementById('login-form');
        const signupForm = document.getElementById('signup-form');
        loginForm.style.display = 'none'
        signupForm.style.display = 'block'
    }
    return (
        <>
            <div className="container">
                <div className="form-container" id="login-form">
                    <h1>Login</h1>
                    <form>
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" name="username" required />
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" required />
                        <button type="submit">Login</button>
                    </form>
                    <p>Don't have an account? <a href="#" id="signup-link" onClick={goSign}>Sign up</a></p>
                </div>

                <div className="form-container" id="signup-form" style={{ display: 'none' }}>
                    <h1>Sign Up</h1>
                    <form>
                        <label htmlFor="new-username">Username</label>
                        <input type="text" id="new-username" name="new-username" required />
                        <label htmlFor="new-email">Email</label>
                        <input type="email" id="new-email" name="new-email" required />
                        <label htmlFor="new-password">Password</label>
                        <input type="password" id="new-password" name="new-password" required />
                        <button type="submit">Sign Up</button>
                    </form>
                    <p>Already have an account? <a href="#" id="login-link" onClick={goLogin}>Login</a></p>
                </div>
            </div>
        </>
    )
}