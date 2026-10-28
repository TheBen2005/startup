import React from 'react';
import './times.css';
import { NavLink, Link } from 'react-router-dom';

function getDays(tutorId){
    const availability = [{id: 1, day: 'Wed', date: 28, title: 'Wednesday, October 28', times : ['9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '6:00 PM']},
        {id: 2, day: 'Thu', date: 29, title: 'Thursday, October 29', times : ['9:00 AM', '10:00 AM', '1:00 PM', '4:00 PM']}
        ];
        return availability;


}

export function Times({ tutor, onSelectSlot }) {
    const [days, setDays] = React.useState([]);
    const [selectedDayID, setSelectedDayID] = React.useState(null);
    const [selectedTime, setSelectedTime] = React.useState(null);
    
    


    React.useEffect(() => {
        const daysResult = getDays(1);
        setDays(daysResult);
        if(daysResult[0] != null){
            setSelectedDayID(daysResult[0].id);
        }
    }, []);
    const chosenDay = days.find((day) => day.id === selectedDayID);
    let numTimes = 0;
    if(chosenDay){
        numTimes = chosenDay.times.length;
    }
    let time = 'times';
    if(numTimes === 1){
        time = 'time';
    }
    let tutorName = "";
    if(tutor){
        tutorName = tutor.name;

    }

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
                <p className="booking-summary">With {tutorName} 1 hour</p>
                <h1 className="times-h1">Select a <span className="title-italics">time</span></h1>
                <ul className="day-list">
                    {days.map((day) => (
                        <li key={day.id}>
                            <button type='button' className='day-pill' aria-pressed={day.id === selectedDayID} onClick={() => {setSelectedDayID(day.id); setSelectedTime(null); }}>{day.day} <span>{day.date}</span></button>
                        </li>
                    ))}
                </ul>
                {chosenDay &&<h2 className="day-header">{chosenDay.title}</h2>}
                <p className="open-count">{numTimes} {time} open</p>
                {/* DATABASE DATA PLACEHOLDER. All of these times will be eventually available times for the tutor that are fetched from the database. */}
                {chosenDay &&<ul className="slot-list">
                    {chosenDay.times.map((time) => 
                        <li key={time}>
                            <button type='button' className='slot' aria-pressed={time === selectedTime} onClick={() => {setSelectedTime(time)}}>{time}</button>
                        </li>
                    
                    )}
                </ul>}
                {selectedTime &&<div id="selection-bar" className="alert alert-success alert-dismissible text-start payment-complete" role="status">
                    <p className="paid-success-color">{chosenDay.title} at {selectedTime}</p>
                    <p className="tutor-contact-message">60 minutes with {tutorName}</p>
                    <Link to="/info" className="btn btn-primary rounded-pill book-button-space" onClick={() => onSelectSlot({ day: chosenDay.title, time: selectedTime})}>Continue</Link>
                    {/* This eventually won't be present all of the time, but is a dynamic message that will appear at the bottom after a time is selected. */}
                </div>}

            </main>
        </>
    );
}