import React from 'react';

export const Objective = ({data}) => {
    return <div className="Objective">
        <h1>OBJECTIVE</h1>
        <div className="content">
        <ul>
            <li key="short"><b>Short term:</b> {data.shortTerm}</li>
            <li key="long"><b>Long term:</b> {data.longTerm}</li>
        </ul>
        </div>
    </div>
}