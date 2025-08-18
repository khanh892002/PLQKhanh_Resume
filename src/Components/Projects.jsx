import React from 'react';
import link from '../assets/icon-link.png';
import group from '../assets/icon-group.png';
import calendar from '../assets/icon-calendar.png';

export const Projects = ({data}) => {
    return <div className="Projects">
        <h1>PROJECTS</h1>
        {data.map((item, index, array) => 
        <div>
            <label className='content checkBox-layout'>
                <input type="checkbox" style={{margin:"auto 10px auto 0"}} id={'proj' + index}/>
                <div className="job-proj-info" id={'proj' + index}>
                    <h2 style={{gridArea:"title"}}>{item.title}</h2>
                    <div style={{gridArea:"info"}}>
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
                    <div style={{gridArea:"dscrb"}}>
                        <div><b>Deliverables:</b> {item.deliverables}</div>
                        <div><b>Tech stacks:</b> {item.techStack.join(', ')}</div>
                        <div><b>Contributions:</b>
                        <ul>{item.contribution.map((item, ind) => <li key={ind}>{item}</li>)}</ul>
                        </div>
                    </div>
                </div>
            </label>
            {(index !== (array.length - 1)) && <hr/>}
        </div>
        )}
    </div>
}