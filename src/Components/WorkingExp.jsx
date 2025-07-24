import React from 'react';
import calendar from '../assets/icon-calendar.png';
import mapPin from '../assets/icon-mapPin.png';

export const WorkingExp = ({data}) => {
    return <div className="WorkingExp">
        <h1>WORKING EXPERIENCE</h1>
        {data.map((item, index, array) =>
            <div>
            <section className='content checkBox-layout'>
                <input type="checkbox" style={{margin: "auto 10px auto 0"}} hidden/>
                <div className='job-proj-info'>
                    <h2 style={{gridArea:"title"}}>{item.title + ' - ' + item.office}</h2>
                    <div style={{gridArea:"info"}}>
                        <div>
                            <span className='icon-frame'><img src={mapPin} style={{height: "100%"}} alt="mapPin-icon"/></span>
                            {item.addr}
                        </div>
                        <div>
                            <span className='icon-frame'><img src={calendar} style={{height: "100%"}} alt="calendar-icon"/></span>
                            {item.timePeriod.from + ' - ' + item.timePeriod.to}
                        </div>
                    </div>
                    <div style={{gridArea:"dscrb"}}>
                        <b>Duties and Responsibilites:</b>
                        <ul>
                            {item.description.map((it, ind) => <li key={ind}>{it}</li>)}
                        </ul>
                    </div>
                </div>
            </section>
            {(index !== array.length - 1) && <hr />}
            </div>
        )}
    </div>
}