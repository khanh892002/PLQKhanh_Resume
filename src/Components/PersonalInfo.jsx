import React from "react";

export default PersonalInfo = (data) => {
    return <div className="PersonalInfo"
    style="display:grid; grid-template-columns: 4fr 1fr;">
        <div></div>
        <div style="aspect-ratio: 1; overflow:hidden; position: relative; border-radius:50%">
            <img src="../assets/portrait.png" style="width:100%; height:auto;"/>
        </div>
    </div>
}