import React from 'react';
import './signup.css';
import { NavLink, Link, useNavigate } from 'react-router-dom';

export function Signup({ onSignUp }) {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const TUTOR_EMAIL = 'bensfakeemail@outlook.com';
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: firstName,
            email: email,
            isTutor: email === TUTOR_EMAIL
        };
        localStorage.setItem('user', JSON.stringify(user));
        onSignUp(user);
        if (user.isTutor) {
            navigate('/setavailability');
        }
        else {
            navigate('/');
        }
    }

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
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" placeholder="Ben" id="firstName" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value) }/>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" placeholder="Myers" id="lastName" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value) }/>
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" placeholder="example.email@outlook.com" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value) }/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="********" id="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill book-button-space w-100" disabled={!email || !password || !lastName || !firstName}>Sign Up</button>
                </form>
                <p className="have-account"> Already have an account?<span><Link to="/login" className="log-in-link"> Login</Link></span></p>

            </main>
        </>
    );
}