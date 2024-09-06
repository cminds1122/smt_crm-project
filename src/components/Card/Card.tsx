import React from "react";
import './Card.scss'
export const Card = ({title, onClick}: any) => {
    return <div className="card" onClick={onClick}>
       <h2>{title}</h2>
    </div>
}