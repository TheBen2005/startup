import React from 'react';
import './info.css';
import { NavLink, useNavigate } from 'react-router-dom';

export function Info({tutor, slot, onSubmitInfo}) {
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const navigate = useNavigate();
    let tutorName = '';
    let slotDay = '';
    let slotTime = '';
    if(tutor){
        tutorName = tutor.name;
    }
    if(slot){
        slotDay = slot.day;
        slotTime = slot.time;
    }

    function handleSubmit(e){
        e.preventDefault();
        onSubmitInfo({ firstName: firstName, lastName: lastName, email: email, phone: phoneNumber });
        navigate('/payment');
    }
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/times" className="back-link">times</NavLink>
                    <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
                </nav>
            </header>
            <main className='info-main'>
                {/* This message below saying "Monday Sep 22 at 1:00pm with Ben 1 hour", will be dynamic and based on the tutor, time selected, and date */}
                <p className="booking-summary">{slotDay} at {slotTime} with {tutorName} {slotTime}</p>
                <h1>Your <span className="title-italics">details</span></h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="firstName" className="form-label">First name</label>
                        <input type="text" placeholder="Ben" id="firstName" name="firstName" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="form-label">Last name</label>
                        <input type="text" placeholder="Myers" id="lastName" name="lastName" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" placeholder="example.email@outlook.com" id="email" name="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="number" className="form-label">Phone number</label>
                        <input type="tel" placeholder="555-652-9282" id="number" name="number" className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    </div>
                    <p className="appointment-text">Only used for appointment reminders.</p>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill book-button-space w-100" disabled={!firstName || !lastName || !email || !phoneNumber}>Continue to payment</button>
                </form>

            </main>

        </>
    );
}