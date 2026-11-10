import './setavailability.css';
import { NavLink, Link, Navigate } from 'react-router-dom';
import { AccountButton } from '../components/accountbutton';
import React from 'react';
import { getDays } from '../functions/getdays';

export function SetAvailability({ user, onLogout }) {
    const [days, setDays] = React.useState([]);
    const [selectedDayID, setSelectedDayID] = React.useState(null);
    const [saved, setSaved] = React.useState(false);
    const [saveError, setSaveError] = React.useState('');


    const ALL_HOURS = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM'];

    const [bookings, setBookings] = React.useState([]);

    function toggleHour(hour) {
        setSaved(false);
        let newTimes;
        if (chosenDay.times.includes(hour)) {
            newTimes = chosenDay.times.filter((t) => t !== hour);
        } else {
            newTimes = [...chosenDay.times, hour];
        }

        const newDay = { ...chosenDay, times: newTimes };

        setDays(days.map((day) => (day.id === newDay.id ? newDay : day)));
    }

    React.useEffect(() => {
        async function loadDays() {
            const daysResult = await getDays(1);
            setDays(daysResult);
            if (daysResult.length > 0) {
                setSelectedDayID(daysResult[0].id);
            }
            const response = await fetch('/api/bookings');
            if (response.status === 200) {
                setBookings(await response.json());
            }
        }
        loadDays();
    }, []);

    React.useEffect(() => {
        if (!saved) {
            return;
        }
        const timer = setTimeout(() => setSaved(false), 2400);
        return () => clearTimeout(timer);
    }, [saved]);

    const chosenDay = days.find((day) => day.id === selectedDayID);
    let openCount = 0;
    let bookedCount = 0;
    if (chosenDay) {
        openCount = chosenDay.times.length;
        bookedCount = bookings.filter((b) => b.dayId === chosenDay.id).length;
    }
    async function handleSave() {
        setSaveError('');
        const response = await fetch('/api/availability', {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ days: days }),
        });
        if (response.status === 200) {
            setSaved(true);
        } else {
            const body = await response.json();
            setSaveError(body.msg);
        }
    }
    let saveText = "Save"
    if (saved) {
        saveText = "Saved"
    }

    if (!user || !user.isTutor) {
        return <Navigate to="/" replace />;
    }


    return (
        <>
            <header>
                <nav>
                    <AccountButton user={user} logout={onLogout} />
                </nav>
                { /* IMPORTANT. This is the page that I, the tutor will only have access too. I will be authenticated and will have access to edit my times. The name displayed in the top is currentlly hard coded to be Ben but will be dynamic based on the information the user logged in with. Non-tutors will be logged in and returned to the home page while authenticated tutors are taken to this page. After loggin in, both the tutors and the users can click their name in the top and log out */}
            </header>
            <main className="set-availability-main">
                { /* IMPORTANT. When the tutor updates times, that infrmation is updated in the database and reflected on users screens when they are choosing times for a tutor in real time. Also, when a user books a time that infromation is updated in the database and displayed on this page */}
                <h1 className="set-availability-h1">Set my <span className="title-italics">availability</span></h1>
                <p className="intro-text">Tap a time to open or close it. Students only see the times you leave open.</p>
                <ul className="day-list">
                    {days.map((day) => (
                        <li key={day.id}>
                            <button type="button" className="day-pill" aria-pressed={day.id === selectedDayID} onClick={() => setSelectedDayID(day.id)}>{day.day} <span>{day.date}</span></button>
                        </li>
                    ))}
                </ul>
                {chosenDay && <h2 className="day-header">{chosenDay.title}</h2>}
                <p className="open-count">{openCount} open · {bookedCount} booked</p>
                {chosenDay && <ul className="slot-list">
                    {ALL_HOURS.map((hour) => {
                        const booking = bookings.find((b) => b.dayId === chosenDay.id && b.time === hour);
                        if (booking) {
                            return <li key={hour}><p className="slot-taken">{hour} · Booked · {booking.contactInfo?.firstName || 'Student'}</p></li>;
                        }
                        const isOpen = chosenDay.times.includes(hour);
                        return (
                            <li key={hour}>
                                <button type="button" className="slot" aria-pressed={isOpen} onClick={() => toggleHour(hour)}>{hour}<span>{isOpen ? ' Open' : ' Closed'}</span></button>
                            </li>
                        );
                    })}
                </ul>}
                <button type="button" className="btn btn-primary rounded-pill save-button" onClick={handleSave} disabled={saved}>{saveText}</button>
                {saveError && <p className="text-danger" role="alert">{saveError}</p>}

            </main>
        </>
    );
}