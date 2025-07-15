import React from 'react';

export const Objective = ({data}) => {
    return <div className="Objective">
        <h1 style="margin-block-start: 0; margin-block-end: 0; border-bottom: 5px solid darkseagreen;">Objective</h1>
        <ul>
            <li>Short term: {data.short-term}</li>
            <li>Long term: {data.long-term}</li>
        </ul>
    </div>
}