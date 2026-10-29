import React from 'react';

export function Banner({ onClose }) {
    const [visible, setVisible] = React.useState(true);

    return (
        <>
        {visible &&<div className="alert alert-success-landing alert-dismissible text-start payment-complete" role="status">
            <p className="paid-success-color">You paid successfully!</p>
            <p className="tutor-contact-message ">Your tutor will contact you directly with your Zoom session details</p>
            <button type="button" className="btn-close" aria-label="Dismiss" onClick={onClose}></button>
        </div>}
        </>
    );



}