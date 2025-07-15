import React from 'react';
import iconedLine from './IconedLine';
import mapPin from '../assets/icon-mapPin.png';
import calendar from '../assets/icon-calendar.png';
import degree from '../assets/icon-degree.png';
import score from '../assets/icon-score.png';

export const Education = ({data}) => {
    return <div className="Education">
        <h1 style="margin-block-start: 0; margin-block-end: 0; border-bottom: 5px solid darkseagreen;">Education</h1>
        {iconedLine(mapPin,data.School)}
        {iconedLine(calendar,data.TimePeriod.from + ' - ' + data.TimePeriod.to)}
        {iconedLine(degree, data.Degree + ', major in ' + data.Major)}
        {iconedLine(score, data.GPA)}
    </div>
}