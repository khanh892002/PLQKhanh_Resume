import React from 'react';
import link from '../assets/icon-link.png';
import group from '../assets/icon-group.png';
import calendar from '../assets/icon-calendar.png';

export const Projects = ({data}) => {
    return <div className="Projects">
        <h1>PROJECTS</h1>
        {data.map((item, index, array) => 
            <div>
            <div className='content'>
                <div className="job-proj-info">
                    <h2>{item.title}</h2>
                    <div>
                        <div>
                            <span className="icon-frame"><img style={{height:"100%"}} src={group} alt='group-icon' /></span>
                            {item.group}
                        </div>
                        <div>
                            <span className="icon-frame"><img style={{height:"100%"}} src={calendar} alt='calendar-icon' /></span>
                            {item.timePeriod.from + ' - ' + item.timePeriod.to}
                        </div>
                        {item.link && <div><a href={item.link}>
                            <span className="icon-frame"><img style={{height:"100%"}} src={link} alt='link-icon' /></span>
                            {item.link}
                        </a></div>}
                    </div>
                </div>
                <div>
                    <div><b>Deliverables:</b> {item.deliverables}</div>
                    <div><b>Tech stacks:</b> {item.techStack.join(', ')}</div>
                    <div><b>Contributions:</b>
                    <ul>{item.contribution.map((item, ind) => <li key={ind}>{item}</li>)}</ul>
                    </div>
                </div>
                {/* contribution: [str]
                 techStack: [str]
                 deliverables: str */}
            </div>
            {(index !== (array.length - 1)) && <hr/>}
            </div>
        )}
    </div>
}