import React from 'react';
import mapPin from '../assets/icon-mapPin.png';
import calendar from '../assets/icon-calendar.png';
import degree from '../assets/icon-degree.png';
import score from '../assets/icon-score.png';

export const Education = ({data}) => {
    return <div className="Education">
        <h1 className='custom-header'>EDUCATION</h1>
        <div><img src={mapPin} className='icon'/>{data.School}</div>
        <div><img src={calendar} className='icon'/>{data.TimePeriod.from + ' - ' + data.TimePeriod.to}</div>
        <div><img src={degree} className='icon' />{data.Degree + ', major in ' + data.Major}</div>
        <div><img src={score} className='icon' />{data.GPA}</div>
    </div>
}