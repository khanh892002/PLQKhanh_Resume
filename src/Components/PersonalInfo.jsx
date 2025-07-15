import React from "react";
import portrait from '../assets/portrait.png';
import git from '../assets/icon-github.png';
import mail from '../assets/icon-email.png';
import mobile from '../assets/icon-mobile.png';
import iconedLine from './IconedLine'

export default PersonalInfo = (data) => {
    return <div className="PersonalInfo" style="display:grid; grid-template-columns: 4fr 1fr;">
        <div>
            <h1>data.FullName</h1>
            {data.Email && iconedLine(mail, data.Email)}
            {data.Mobile && iconedLine(mobile, data.Mobile)}
            {data.Github && iconedLine(git, <a href={data.Github} style="text-decoration: none; color: black;">
                                        data.Github.substr(data.Github.lastIndexOf('/') + 1)</a>)
            }
        </div>
        <div style="aspect-ratio: 1; align-self:start; overflow:hidden; border-radius:50%">
            <img src={portrait} style="width:100%;"/>
        </div>
    </div>
}