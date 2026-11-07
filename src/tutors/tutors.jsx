import { AccountButton } from '../components/accountbutton';
import React from 'react';
import './tutors.css';
import { NavLink, Link } from 'react-router-dom';
import {TutorCard} from './tutorcard';

async function getTutors(endpoint) {
    const response = await fetch(endpoint, {
            method: 'get',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            return tutors;
        } 
        else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }

}

export function Tutors({ onSelectTutor, onLogout, user }) {
    const [tutors, setTutors] = React.useState([]);

    React.useEffect(() => {
        const tutorsResult = getTutors(`/api/auth/tutors`);
        setTutors(tutorsResult);
    }, []);
    
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="back-link">Back</NavLink>
                    <AccountButton user={user} logout={onLogout}/>
                </nav>
            </header>
            <main className='tutors-main'>
                {/* DATABASE DATA PLACEHOLDER. This is a placeholder for the tutor cards. Eventually, this tutor information will be pulled from the database and used to make tutor card react components. */}
                <h1>Choose your <span className="title-italics">tutor</span></h1>
                <p className="intro-text">Pick who you'd like to work with and we'll show you their open times.</p>
                <ul className="tutor-list">
                    {tutors.map((tutor) => (
                        <li key={tutor.id} className='tutor-space'>
                            <TutorCard name = {tutor.name} score = {tutor.score} image = {tutor.image} test = {tutor.test} onSelect={() => onSelectTutor(tutor)}/>
                        </li>
                    ))}
                
                </ul>
            </main>
        </>
    );
}