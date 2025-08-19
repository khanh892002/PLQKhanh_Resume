import React from "react";
import { IconFrame } from "./IconFrame";
import portrait from '../assets/portrait.png';
import git from '../assets/icon-github.png';
import mail from '../assets/icon-email.png';
import mobile from '../assets/icon-mobile.png';
import leetcode from '../assets/icon-leetcode.png';

export const PersonalInfo = ({data}) => {
    return <div className="PersonalInfo" style={{display:"grid", gridTemplateColumns: "4fr 1fr"}}>
        <div>
            <h1 style={{marginBottom: ".5em"}}>{data.FullName}</h1>
            {data.Email && <div>
                <IconFrame src={mail} alt={'email-icon'} />{data.Email}
            </div>}
            {data.Mobile && <div>
                <IconFrame src={mobile} alt={'smartphone-icon'}/>{data.Mobile}
            </div>}
            {data.Github && <div><a href={data.Github}>
                <IconFrame src={git} alt={'github-icon'}/>
                {data.Github.substr(data.Github.lastIndexOf('/') + 1)}
            </a></div>}
            {data.Leetcode && <div><a href={data.Leetcode.link}>
                <IconFrame src={leetcode} alt={'leetcode-icon'}/>{data.Leetcode.username}
            </a></div>}
        </div>
        <div className="portrait-frame">
            <img src={portrait} style={{width:"100%"}} alt="portrait"/>
        </div>
    </div>
}