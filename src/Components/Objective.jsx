import React from 'react';

export const Objective = ({data}) => {
    return <div className="Objective">
        <h1 className='custom-header'>OBJECTIVE</h1>
        <ul>
            <li>Short term: {data.short-term}</li>
            <li>Long term: {data.long-term}</li>
        </ul>
    </div>
}