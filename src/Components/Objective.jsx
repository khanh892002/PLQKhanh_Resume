import React from 'react';

export const Objective = ({data}) => {
    return <div className="Objective">
        <h1 className='custom-header'>OBJECTIVE</h1>
        <div className="content">
        <ul>
            <li key="short">Short term: {data.shortTerm}</li>
            <li key="long">Long term: {data.longTerm}</li>
        </ul>
        </div>
    </div>
}