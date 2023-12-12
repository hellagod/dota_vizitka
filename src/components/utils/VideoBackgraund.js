import React from "react";
import './videoback.css'
import data from "../../data/data";


export default function VideoBackground({children}) {
    return <div className="justify-content-center">
        <div className="wrapper">
            <video loop="loop" autoPlay={true} muted>
                <source src={data.back} type="video/mp4"/>
            </video>
        </div>
        <div className="pad-global">
                {children.map(comp => comp)}
            </div>
    </div>
}