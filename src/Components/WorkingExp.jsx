import React from 'react';
import calendar from '../assets/icon-calendar.png';
import mapPin from '../assets/icon-mapPin.png';

export const WorkingExp = ({data}) => {
    return <div className="WorkingExp">
        <h1 className='custom-header'>WORKING EXPERIENCE</h1>
        {data.map((item, index, array) =>
            <div>
            <section className='content'>
                <div className='job-proj-info'>
                    <h2>{item.title + ' - ' + item.office}</h2>
                    <div>
                        <div><img src={mapPin} className='icon' alt="mapPin-icon"/>{item.addr}</div>
                        <div><img src={calendar} className='icon' alt="calendar-icon"/>{item.timePeriod.from + ' - ' + item.timePeriod.to}</div>
                    </div>
                </div>
                <div>
                    Duties and Responsibilites:
                    <ul>
                        {item.description.map((it, ind) => <li key={ind}>{it}</li>)}
                    </ul>
                </div>
            </section>
            {(index !== array.length - 1) && <hr />}
            </div>
        )}
    </div>
}