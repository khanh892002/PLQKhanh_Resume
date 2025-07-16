import React from "react";
import portrait from '../assets/portrait.png';
import git from '../assets/icon-github.png';
import mail from '../assets/icon-email.png';
import mobile from '../assets/icon-mobile.png';

export default PersonalInfo = (data) => {
    return <div className="PersonalInfo" style="display:grid; grid-template-columns: 4fr 1fr;">
        <div>
            <h1>data.FullName</h1>
            {data.Email && <div><img src={mail} className="icon" />data.Email</div>}
            {data.Mobile && <div><img src={mobile} className="icon"/>data.Mobile</div>}
            {data.Github && <div><img src={git} className="icon"/>
            <a href={data.Github} style="text-decoration: none; color: black;">
                data.Github.substr(data.Github.lastIndexOf('/') + 1)</a></div>}
        </div>
        <div className="portrait-frame">
            <img src={portrait} style="width:100%;"/>
        </div>
    </div>
}