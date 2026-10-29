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
    const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')) || '');
    const [selectedTutor, setSelectedTutor] = React.useState(null);
    const [selectedSlot, setSelectedSlot] = React.useState(null);
    const [contactInfo, setContactInfo] = React.useState(null);
    const [justPaid, setJustPaid] = React.useState(null);

    return (
        <div className='body'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing paid={justPaid} onJustPaid={setJustPaid} user={user} onLogout={setUser}/>} exact />
                    <Route path="/tutors" element={<Tutors onSelectTutor={setSelectedTutor} onLogout={setUser} user={user}/>} exact />
                    <Route path="/times" element={<Times tutor={selectedTutor} onSelectSlot = {setSelectedSlot} onLogout={setUser} user={user}/>} exact />
                    <Route path="/signup" element={<Signup onSignUp={setUser}/>} exact />
                    <Route path="/setavailability" element={<SetAvailability user={user} onLogout={setUser}/>} exact />
                    <Route path="/payment" element={<Payment tutor={selectedTutor} slot={selectedSlot} contactInfo={contactInfo} onPaid={() => setJustPaid(true)} onLogout={setUser} user={user}/>} exact />
                    <Route path="/login" element={<Login onLogin={setUser}/>} exact />
                    <Route path="/info" element={<Info tutor={selectedTutor} slot={selectedSlot} onSubmitInfo={setContactInfo}/>} exact />
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
