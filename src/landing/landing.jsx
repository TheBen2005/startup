import './landing.css';
import{NavLink, Link } from 'react-router-dom';
import { Banner } from './banner';

export function Landing({ paid, onJustPaid }) {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
                </nav>
            </header>

            <main className="landing-main">
                {paid && <Banner onClose={() => onJustPaid(false)}/>}
                {/* This will be displayed after the user presses the button confirming they paid. This will not be displayed all of the time but only briefly after the user confirms their payment. They will be able to close this message using the x button */}
                <h1>Ben's Tutoring <span className="title-italics">ACT/SAT</span></h1>
                <p className="intro-text">Book an appointment almost instantly and together we will achieve your goals on the ACT/SAT</p>
                <Link to="/tutors" className="btn btn-primary rounded-pill book-button-space">Book Appointment</Link>
                <p className="book-note-space">No account needed to book appointment</p>
            </main>
        </>
    );

}