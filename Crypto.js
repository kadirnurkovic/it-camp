import React from 'react';
import "./Crypto.css"

export default function Crypto({  name, value, deleteBtn }) {
    return (
        <div className="Crypto">
            <p className='paragraf-1'>{name}</p>
            <p className='paragraf-2'>{value}</p>
            <button id="btn"onClick={deleteBtn}>X</button>
        </div>
    )
}