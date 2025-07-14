import React from "react";
import portrait from '../assets/portrait.png';
import git from '../assets/icon-github.png';
import mail from '../assets/icon-email.png';
import mobile from '../assets/icon-mobile.png';

export default PersonalInfo = (data) => {
    const iconed = ({link, content}) => {
        return <div><img src={link} style="height:1em; width:auto; vertical-align:middle; padding:0.25em;"/>content</div>
    }
    return <div className="PersonalInfo"
    style="display:grid; grid-template-columns: 4fr 1fr;">
        <div style="display:grid; grid-template-areas:'header header header' '. . .'">
            // this still need to handle the 2nd row will only have 1 line
            <h1 style="grid-area: header">data.FullName</h1>
            {data.Email && iconed(mail, data.Email)}
            {data.Mobile && iconed(mobile, data.Mobile)}
            {data.Github && iconed(git, (data.Github))}// still need further handle to take the last string after / as <a></a>
        </div>
        <div style="aspect-ratio: 1; overflow:hidden; position: relative; border-radius:50%">
            <img src={portrait} style="width:100%; height:auto;"/>
        </div>
    </div>
}