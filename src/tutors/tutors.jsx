import './tutors.css';
import { NavLink, Link } from 'react-router-dom';

export function Tutors() {
    return (
        <div>
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
                    <li className="tutor-space">
                        <Link to="/times" className="card">
                            <img src="/public/suitimage.jpg" className="card-img-top" alt="Ben" />
                            <h2 className="card-title">Ben</h2>
                            <p className="card-text">1390 <span className="sat-score">SAT</span></p>
                        </Link>
                    </li>
                    <li className="tutor-space">
                        <Link to="/times" className="card">
                            <img src="/public/suitimage.jpg" className="card-img-top" alt="Ben" />
                            <h2 className="card-title">Ben</h2>
                            <p className="card-text">1390 <span className="sat-score">SAT</span></p>
                        </Link>
                    </li>
                    <li className="tutor-space">
                        <Link to="/times" className="card">
                            <img src="/public/suitimage.jpg" className="card-img-top" alt="Ben" />
                            <h2 className="card-title">Ben</h2>
                            <p className="card-text">1390 <span className="sat-score">SAT</span></p>
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    );
}