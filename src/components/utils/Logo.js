import {Image, Row} from "react-bootstrap";
import data from "../../data/data";
import React from "react";
import './logo.css'


export default function Logo(){
    return <div className="logo">
        <Image src={data.about.logo.icon} className='logo-icon'/>
        <div className="logo-title">{data.about.logo.title}</div>
    </div>
}