import React from 'react';
import './payment.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { AccountButton } from '../components/accountbutton';

export function Payment({ tutor, slot, contactInfo, onPaid, onLogout, user}) {
    const [paymentStatus, setPaymentStatus] = React.useState(false)
    let paymentMessageButton = 'I paid';
    let tutorName = '';
    let slotDay = '';
    let slotTime = '';
    const navigate = useNavigate();
    if(tutor){
        tutorName = tutor.name;
        
    }
    if(slot){
        slotDay = slot.day;
        slotTime = slot.time;
    }

    if(paymentStatus){
        paymentMessageButton = 'Notifying ' + tutorName;
        
    }

    // IMPORTANT: 3RD PARTY SERVICE CALL. This will be replaced with a call to my server, which sends the email to me through a third party service, most likely resend.
    function sendPaymentEmail(booking) {
        return new Promise((resolve) => {
            setTimeout(resolve, 1600);
        });
    }

    async function handlePaid() {
        setPaymentStatus(true);
        await sendPaymentEmail({ tutor, slot, contactInfo });
        onPaid();
        navigate('/');
    }
    let linkString = '/info';
    let linkMessage = 'details';
    if(user){
        linkString = '/times'
        linkMessage = 'times'
    }

    return (
        <>
            <header>
                <nav>
                    <NavLink to={linkString} className="back-link">{linkMessage}</NavLink>
                    <AccountButton user={user} logout={onLogout}/>
                </nav>
            </header>
            <main className="payment-main">
                {/* This message below saying "Monday Sep 22 at 1:00pm with Ben 1 hour", will be dynamic and based on the tutor, time selected, and date */}
                <p className="booking-summary">{slotDay} at {slotTime} with {tutorName} 1 hour</p>
                <h1 className="payment-h1">Pay with <span className="title-italics">Venmo</span></h1>
                <p className="intro-text">Scan the code with your phone's camera, send the amount below, then tap I paid.</p>
                {/* DATABASE DATA PLACEHOLDER. The image displaying the venmo qr code will eventually be pulled from the database for the venmo of the correct tutor rather than being hard coded.*/}
                <div className="card payment-card">
                    <img src="QRcode.png" className="qr-code" alt="qr code for @ben-tutoring" />
                    <p className="money-amount">$60</p>
                    <p className="where-payment">to @ben-tutoring</p>
                </div>
                <div className="payment-form">
                    <button type="button" className="btn btn-primary btn-lg rounded-pill book-button-space w-100" disabled={paymentStatus} onClick={handlePaid}>{paymentMessageButton}</button>
                </div>
                


            </main>
        </>
    );
}