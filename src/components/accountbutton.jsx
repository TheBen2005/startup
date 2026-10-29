import React from 'react';
import { NavLink } from 'react-router-dom';

export function AccountButton({ user, logout }) {
    function handleLogout(){
        localStorage.removeItem('user');
        logout(null);
        
    }
    if (!user) {
        return (
            <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
        );
    }
    else {
        return (
            <div className="ms-auto">
                <details>
                    <summary className="btn btn-outline-secondary rounded-pill">{user.firstName}</summary>
                    <ul>
                        <li>
                            <NavLink to="/" className="back-link">Home</NavLink>
                        </li>
                        <li>
                            <button className="btn btn-primary rounded-pill book-button-space" onClick={handleLogout}>Log out</button>
                        </li>

                    </ul>
                </details>
            </div>
        )
    }
}