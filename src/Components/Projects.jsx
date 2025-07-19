import React from 'react';
import link from '../assets/icon-link.png';
import group from '../assets/icon-group.png';
import calendar from '../assets/icon-calendar.png';

export const Projects = ({data}) => {
    console.log(data);
    return <div className="Projects">
        <h1 className='custom-header'>PROJECTS</h1>
        {data.map((item, index, array) => 
            <div>
            <div className='content'>
                <div className="job-proj-info">
                    <h2>{item.title}</h2>
                    <div>
                        <div><img className='icon' src={group} alt='group-icon' />{item.group}</div>
                        <div><img className='icon' src={calendar} alt='calendar-icon' />{item.timePeriod.from + ' - ' + item.timePeriod.to}</div>
                        {item.link && <div><a href={item.link}><img className='icon' src={link} alt='link-icon' />{item.link}</a></div>}
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