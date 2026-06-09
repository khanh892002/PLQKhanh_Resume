import React from 'react';

export const Skills = ({ data }) => {
	return <div className="Skills">
		<h1>SKILLS</h1>
		<div className="content">
			{Object.entries(data).map(([key, val]) => <div><b>{key}:</b> {val.join(', ')}</div>)}
		</div>
	</div>
}