import './setavailability.css';
import { NavLink, Link } from 'react-router-dom';

export function SetAvailability() {
    return (
        <>
            <header>
                <nav>
                    <details className="ms-auto">
                        <summary className="btn btn-outline-secondary rounded-pill">Ben</summary>
                        <ul>
                            <li>
                                <NavLink to="/" className="back-link">Home</NavLink>
                            </li>
                            <li>
                                <button className="btn btn-primary rounded-pill book-button-space">Log out</button>
                            </li>

                        </ul>
                    </details>
                </nav>
                { /* IMPORTANT. This is the page that I, the tutor will only have access too. I will be authenticated and will have access to edit my times. The name displayed in the top is currentlly hard coded to be Ben but will be dynamic based on the information the user logged in with. Non-tutors will be logged in and returned to the home page while authenticated tutors are taken to this page. After loggin in, both the tutors and the users can click their name in the top and log out */ }
            </header>
            <main className="set-availability-main">
                { /* IMPORTANT. When the tutor updates times, that infrmation is updated in the database and reflected on users screens when they are choosing times for a tutor in real time. Also, when a user books a time that infromation is updated in the database and displayed on this page */ }
                <h1 className="set-availability-h1">Set my <span className ="title-italics">availability</span></h1>
                <p className="intro-text">Tap a time to open or close it. Students only see the times you leave open.</p>
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
                <p className="open-count">4 times open 1 booked</p>
                <ul className="slot-list">
                    <li>
                        <button type="button" className="slot" aria-pressed="false">8:00 AM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="true">9:00 AM<span> Open</span></button>
                    </li>
                    <li>
                        <p className="slot-taken" aria-pressed="true"> 10:00AM booked Jordan </p>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="true">11:00 AM<span> Open</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">12:00 PM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">1:00 PM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">2:00 PM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="true">3:00 PM<span> Open</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="true">4:00 PM<span> Open</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">5:00 PM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">6:00 PM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">7:00 PM<span> Closed</span></button>
                    </li>
                    <li>
                        <button type="button" className="slot" aria-pressed="false">8:00 PM<span> Closed</span></button>
                    </li>
                </ul>
                <button type="button" className="btn btn-primary rounded-pill save-button">Save</button>

            </main>
        </>
    );
}