import './payment.css';
import { NavLink, Link } from 'react-router-dom';

export function Payment() {
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/info" className="back-link">details</NavLink>
                    <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
                </nav>
            </header>
            <main className="payment-main">
                {/* This message below saying "Monday Sep 22 at 1:00pm with Ben 1 hour", will be dynamic and based on the tutor, time selected, and date */}
                <p className="booking-summary">Monday Sep 22 at 1:00 PM with Ben 1 hour</p>
                <h1 className="payment-h1">Pay with <span className="title-italics">Venmo</span></h1>
                <p className="intro-text">Scan the code with your phone's camera, send the amount below, then tap I paid.</p>
                {/* DATABASE DATA PLACEHOLDER. The image displaying the venmo qr code will eventually be pulled from the database for the venmo of the correct tutor rather than being hard coded.*/}
                <div className="card payment-card">
                    <img src="QRcode.png" className="qr-code" alt="qr code for @ben-tutoring" />
                    <p className="money-amount">$60</p>
                    <p className="where-payment">to @ben-tutoring</p>
                </div>
                <form action="/" className="payment-form">
                    <button type="submit" className="btn btn-primary btn-lg rounded-pill book-button-space w-100">I Paid</button>
                </form>
                {/* IMPORTANT: 3RD PARTY SERVICE CALL This button is very important. This button will trigger an email to be sent to me with the information the user provided (external API). I will most likely use resend.com to accomplish this. */}


            </main>
        </>
    );
}