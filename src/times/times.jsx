import './times.css';
import { NavLink, Link } from 'react-router-dom';

export function Times() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/tutors" className="back-link">tutors</NavLink>
                    <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
                </nav>
            </header>
            <main className="times-main">
                {/* This message below saying "with Ben 1 hour", will be dynamic and based on the tutor and the amount of time selected */}
                <p className="booking-summary">With Ben 1 hour</p>
                <h1 className="times-h1">Select a <span className="title-italics">time</span></h1>
                <ul className="day-list">
                    <li>
                        <button type="button" className="day-pill" aria-pressed="true">Mon <span>22</span></button>
                    </li>
                    <li>
                        <button type="button" className="day-pill" aria-pressed="false">Tue <span>23</span></button>
                    </li>
                    <li>
                        <button type="button" className="day-pill" aria-pressed="false">Wed <span>24</span></button>
                    </li>
                    <li>
                        <button type="button" className="day-pill" aria-pressed="false">Thu <span>25</span></button>
                    </li>
                    <li>
                        <button type="button" className="day-pill" aria-pressed="false">Fri <span>26</span></button>
                    </li>
                </ul>
                <h2 className="day-header">Monday, September 22</h2>
                <p className="open-count">4 times open</p>
                {/* DATABASE DATA PLACEHOLDER. All of these times will be eventually available times for the tutor that are fetched from the database. */}
                <ul className="slot-list">
                    <li>
                        <button type="button" className="slot">9:00 AM</button>
                    </li>
                    <li>
                        <p className="slot-taken"><s>Taken 10:00 AM</s></p>
                        {/* IMPORTANT: WEBSOCKETPLACEHOLDER. When one user books an appointment at a time it will update for all users. */}
                    </li>
                    <li>
                        <button type="button" className="slot">11:00 AM</button>
                    </li>
                    <li>
                        <button type="button" className="slot">3:00 PM</button>
                    </li>
                    <li>
                        <button type="button" className="slot">4:00 PM</button>
                    </li>
                </ul>
                <div id="selection-bar" className="alert alert-success alert-dismissible text-start payment-complete" role="status">
                    <p className="paid-success-color">Monday, September 22 at 9:00 AM</p>
                    <p className="tutor-contact-message">60 minutes with Ben</p>
                    <Link to="/info" className="btn btn-primary rounded-pill book-button-space">Continue</Link>
                    {/* This eventually won't be present all of the time, but is a dynamic message that will appear at the bottom after a time is selected. */}
                </div>

            </main>
        </>
    );
}