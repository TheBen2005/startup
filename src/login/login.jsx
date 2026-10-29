import React from 'react';
import './login.css';
import { NavLink, Link } from 'react-router-dom';

export function Login({ onLogin }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const TUTOR_EMAIL = 'bensfakeemail@outlook.com';
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const user = {
            firstName: email.split('@')[0],
            email: email,
            isTutor: email === TUTOR_EMAIL
        };
        localStorage.setItem('user', JSON.stringify(user));
        onLogin(user);
        if(user.isTutor){
            navigate('/setavailability');
        }
        else{
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
            <main className="login-main">
                <h1>Welcome <span className="title-italics">back</span></h1>
                <p className="intro-text">Log in with your email and password.</p>
                <form onSubmit={handleSubmit}>
                    {/* Currently logging in sends the user to the set availability page. In the future, users who are not tutors will be taken to the home page with their name on the top right, while tutors will be taken to this page. */}
                    <div>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" placeholder="example.email@outlook.com" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" placeholder="********" id="password" name="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill book-button-space w-100" disabled={!email || !password}>Log in</button>
                </form>
                <p className="need-account">Need an account?<span><Link to="/signup" className="sign-up-link"> Sign up</Link></span></p>


            </main>
        </>
    );
}