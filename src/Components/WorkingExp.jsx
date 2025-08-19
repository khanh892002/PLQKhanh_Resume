import React from 'react';
import { IconFrame } from './IconFrame';
import calendar from '../assets/icon-calendar.png';
import mapPin from '../assets/icon-mapPin.png';

export const WorkingExp = ({data}) => {
    return <div className="WorkingExp">
        <h1>WORKING EXPERIENCE</h1>
        {data.map((item, index, array) =>
            <div>
            <label className='content checkBox-layout'>
                <input type="checkbox" style={{margin: "auto 10px auto 0"}} />
                <div className='job-proj-info'>
                    <h2 style={{gridArea:"title"}}>{item.title + ' - ' + item.office}</h2>
                    <div style={{gridArea:"info"}}>
                        <div>
                            <IconFrame src={mapPin} altTxt={'mapPin-icon'}/>{item.addr}
                        </div>
                        <div>
                            <IconFrame src={calendar} altTxt={'calendar-icon'}/>{item.timePeriod.from + ' - ' + item.timePeriod.to}
                        </div>
                    </div>
                    <div style={{gridArea:"dscrb"}}>
                        <b>Duties and Responsibilites:</b>
                        <ul>
                            {item.description.map((it, ind) => <li key={ind}>{it}</li>)}
                        </ul>
                    </div>
                </div>
            </label>
            {(index !== array.length - 1) && <hr />}
            </div>
        )}
    </div>
}