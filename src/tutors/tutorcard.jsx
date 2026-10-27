import {Link} from 'react-router-dom';

export function TutorCard({name, score, image, test}){
    return (
        <Link to="/times" className="card">
            <img src={image} className="card-img-top" alt={name} />
            <h2 className="card-title">{name}</h2>
            <p className="card-text">{score} <span className="sat-score">{test}</span></p>
        </Link>
    );


}