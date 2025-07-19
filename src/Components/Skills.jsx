import React from 'react';

export const Skills = ({data}) => {
    return <div className="Skills">
        <h1 className="custom-header">SKILLS</h1>
        <div className="content">
        <b>Programming languages:</b>
        <ul>
            {Object.entries(data.ProgLangs).map(([key, val]) => <li><b>{key}:</b> {val.join(', ')}</li>)}
        </ul>
        {Object.entries(data).slice(1).map(([key, val]) => <div><b>{key}:</b> {val.join(', ')}</div>)}
        </div>
    </div>
}