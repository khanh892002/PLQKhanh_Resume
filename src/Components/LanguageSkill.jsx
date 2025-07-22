import React from 'react'

export const LanguageSkill = ({data}) => {
    return <div className="LanguageSkill">
        <h1>LANGUAGE SKILLS</h1>
        <div className="content">
            {Object.entries(data).map(([key, val]) => <div><b>{key}:</b> {val}</div>)}
        </div>
    </div>
}