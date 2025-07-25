import React from "react";
import "./Features.css";

export const Features = ({title,description,icon}) => {
    return (
        <div className="card" id="features">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-icons">{icon}</p>
        </div>
    );
}