import React from 'react';
import { IconFrame } from './IconFrame';
import mapPin from '../assets/icon-mapPin.png';
import calendar from '../assets/icon-calendar.png';
import degree from '../assets/icon-degree.png';
import score from '../assets/icon-score.png';

export const Education = ({data}) => {
    return <div className="Education">
        <h1>EDUCATION</h1>
        <div className="content">
        <div><IconFrame src={mapPin} altTxt={'mapPin-icon'}/>{data.School}</div>
        <div><IconFrame src={calendar} alt={'calendar-icon'}/>{data.TimePeriod.from + ' - ' + data.TimePeriod.to}</div>
        <div><IconFrame src={degree} alt={'degree-icon'}/>{data.Degree + ', major in ' + data.Major}</div>
        <div><IconFrame src={score} alt={'score-icon'}/>{data.GPA}</div>
        </div>
    </div>
}