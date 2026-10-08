import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import{ BrowserRouter, NavLink, Route, Routes, Link } from 'react-router-dom';
import { Landing } from './landing/landing';
import { Tutors } from './tutors/tutors';
import { Times } from './times/times';
import { Signup } from './signup/signup';
import { SetAvailability } from './setavailability/setavailability';
import { Payment } from './payment/payment';
import { Login } from './login/login';
import { Info } from './info/info';

export default function App() {
    return (
        <div className='body'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} exact />
                    <Route path="/tutors" element={<Tutors />} exact />
                    <Route path="/times" element={<Times />} exact />
                    <Route path="/signup" element={<Signup />} exact />
                    <Route path="/setavailability" element={<SetAvailability />} exact />
                    <Route path="/payment" element={<Payment />} exact />
                    <Route path="/login" element={<Login />} exact />
                    <Route path="/info" element={<Info />} exact />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <footer>
                    <p>Ben Myers</p>
                    <a href="https://github.com/TheBen2005/startup">Ben's Github</a>
                </footer>
            </BrowserRouter>
            
        </div>
    );
}

function NotFound() {
    return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>
}
