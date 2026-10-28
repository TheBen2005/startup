import React from 'react';
import './tutors.css';
import { NavLink, Link } from 'react-router-dom';
import {TutorCard} from './tutorcard';

function getTutors() {
    const tutors = [{id: 1, name: 'Ben', score: 1390, test: 'SAT', image: '/suitimage.jpg'},
        {id: 2, name: 'Matt', score: 34, test: 'ACT', image: '/suitimage.jpg'}

    ];
    return tutors;

}

export function Tutors({ onSelectTutor }) {
    const [tutors, setTutors] = React.useState([]);

    React.useEffect(() => {
        const tutorsResult = getTutors();
        setTutors(tutorsResult);
    }, []);
    
    return (
        <>
            <header>
                <nav>
                    <NavLink to="/" className="back-link">Back</NavLink>
                    <NavLink to="/login" className="btn btn-outline-secondary rounded-pill ms-auto">Login/Register</NavLink>
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