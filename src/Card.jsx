import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ imgsrc, title }) => {
    return (
        <div className="col-md-4 col-sm-6 col-12 mb-4">
            <div className="card">
                <img 
                  src={imgsrc} 
                  alt={title} 
                  style={{ width: '100%', height: '250px' }} 
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Card;
