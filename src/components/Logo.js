import {Image, Row} from "react-bootstrap";
import siteData from "../siteData";
import React from "react";

const iconTitle = {
    color: "#000000", width: 'auto',
    fontSize: "max(2.7vw, 1.5em)",
}
export default function Logo(){
    return <Row className="mt-0 mt-sm-1 mt-md-2 mt-lg-2">
        <Image className="p-0" src={siteData.about.logo.icon} style={{width: "max(2.5em, 4vw)"}}/>
        <h3 className="m-0" style={iconTitle}>{siteData.about.logo.title}</h3>
    </Row>
}