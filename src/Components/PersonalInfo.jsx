import React from "react";
import portrait from '../assets/portrait.png';
import git from '../assets/icon-github.png';
import mail from '../assets/icon-email.png';
import mobile from '../assets/icon-mobile.png';
import leetcode from '../assets/icon-leetcode.png';

export const PersonalInfo = ({data}) => {
    return <div className="PersonalInfo" style={{display:"grid", gridTemplateColumns: "4fr 1fr"}}>
        <div>
            <h1>{data.FullName}</h1>
            {data.Email && <div>
                <span className="icon-frame"><img src={mail} style={{height: "100%"}} alt="email-icon" /></span>
                {data.Email}
            </div>}
            {data.Mobile && <div>
                <span className="icon-frame"><img src={mobile} style={{height: "100%"}} alt="smartphone-icon"/></span>
                {data.Mobile}
            </div>}
            {data.Github && <div><a href={data.Github}>
                <span className="icon-frame"><img src={git} style={{height: "100%"}} alt="github-icon"/></span>
                {data.Github.substr(data.Github.lastIndexOf('/') + 1)}
            </a></div>}
            {data.Leetcode && <div><a href={data.Leetcode.link}>
                <span className="icon-frame"><img src={leetcode} style={{height: "100%"}} alt="leetcode-icon"/></span>
                {data.Leetcode.username}
            </a></div>}
        </div>
        <div className="portrait-frame">
            <img src={portrait} style={{width:"100%"}} alt="portrait"/>
        </div>
    </div>
}