import './signup.css';
import { NavLink, Link } from 'react-router-dom';

export function Signup() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="back-link">home</NavLink>
                </nav>
            </header>
            <main className="signup-main">
                <h1>Create your <span className="title-italics">account</span></h1>
                <p className="intro-text">Sign up with first name, last name, email and password.</p>
                <form method="get" action="/">
                    <div>
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" placeholder="Ben" id="firstName" name="firstName" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" placeholder="Myers" id="lastName" name="lastName" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" placeholder="example.email@outlook.com" id="email" name="email" className="form-control" />
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="********" id="password" name="password" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill book-button-space w-100">Sign Up</button>
                </form>
                <p className="have-account"> Already have an account?<span><Link to="/login" className="log-in-link"> Login</Link></span></p>

            </main>
        </>
    );
}