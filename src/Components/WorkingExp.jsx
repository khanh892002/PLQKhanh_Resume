import React from 'react';
import calendar from '../assets/icon-calendar.png';
import mapPin from '../assets/icon-mapPin.png';

export const WorkingExp = ({data}) => {
    return <div className="WorkingExp">
        <h1 className='custom-header'>WORKING EXPERIENCE</h1>
        {data.WorkingExp.map((item, index, array) => {
            <section>
                <div className='job-info'>
                    <h2>{data.title + ' - ' + data.office}</h2>
                    <div>
                        <div><img src={mapPin} className='icon'/>{data.addr}</div>
                        <div><img src={calendar} className='icon'/>{data.timePeriod.from + ' - ' + data.timePeriod.to}</div>
                    </div>
                </div>
                <div>
                    Duties and Responsibilites:
                    <ul>
                        {data.description.map(item => <li>{item}</li>)}
                    </ul>
                </div>
            </section>
            {(index !== array.length - 1) && <hr />}
        })}
    </div>
}