import React from 'react';
import mapPin from '../assets/icon-mapPin.png';
import calendar from '../assets/icon-calendar.png';
import degree from '../assets/icon-degree.png';
import score from '../assets/icon-score.png';

export const Education = ({data}) => {
    return <div className="Education">
        <h1>EDUCATION</h1>
        <div className="content">
            <div>
                <span className="icon-frame"><img src={mapPin} style={{height: "100%"}} alt="mapPin-icon"/></span>
                {data.School}
            </div>
            <div>
                <span className="icon-frame"><img src={calendar} style={{height: "100%"}} alt="calendar-icon"/></span>
                {data.TimePeriod.from + ' - ' + data.TimePeriod.to}
            </div>
            <div>
                <span className="icon-frame"><img src={degree} style={{height: "100%"}} alt="degree-icon"/></span>
                {data.Degree + ', major in ' + data.Major}
            </div>
            <div>
                <span className="icon-frame"><img src={score} style={{height: "100%"}} alt="score-icon"/></span>
                {data.GPA}
            </div>
        </div>
    </div>
}