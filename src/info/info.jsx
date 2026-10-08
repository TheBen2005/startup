import './info.css';
import { NavLink, Link } from 'react-router-dom';

export function Info() {
    return (
        <div>
            <header>
                <nav>
                    <NavLink to="/times" className="back-link">times</NavLink>
                    <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
                </nav>
            </header>
            <main className='info-main'>
                {/* This message below saying "Monday Sep 22 at 1:00pm with Ben 1 hour", will be dynamic and based on the tutor, time selected, and date */}
                <p className="booking-summary">Monday Sep 22 at 1:00 PM with Ben 1 hour</p>
                <h1>Your <span className="title-italics">details</span></h1>
                <form method="get" action="/payment">
                    <div>
                        <label for="firstName" className="form-label">First name</label>
                        <input type="text" placeholder="Ben" id="firstName" name="firstName" className="form-control" />
                    </div>
                    <div>
                        <label for="lastName" className="form-label">Last name</label>
                        <input type="text" placeholder="Myers" id="lastName" name="lastName" className="form-control" />
                    </div>
                    <div>
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" placeholder="example.email@outlook.com" id="email" name="email" className="form-control" />
                    </div>
                    <div>
                        <label for="number" className="form-label">Phone number</label>
                        <input type="tel" placeholder="555-652-9282" id="number" name="number" className="form-control" />
                    </div>
                    <p className="appointment-text">Only used for appointment reminders.</p>
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill book-button-space w-100">Continue to payment</button>
                </form>

            </main>

        </div>
    );
}