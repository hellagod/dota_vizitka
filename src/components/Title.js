import {Row} from "react-bootstrap";
import React from "react";
import dataSite from "../siteData";

const title = {
    marginTop: "5vw",
    fontFamily: "Bahnschrift, serif",
    color: "#576BFF",
    fontSize: "max(10vw, 3.7em)",
    lineHeight: "0.8"
}

const subTitle = {
    fontSize: "max(2.7vw, 1.5em)",
    lineHeight: "1.2"
}

export default function Title() {
    return <Row className="justify-content-center mt-3 mt-sm-4 mt-md-5 mt-lg-5 mb-5 mb-sm-4 mb-md-4 mb-lg-5">
        <div className="text-center mb-3 mb-sm-1 mb-md-1 mb-lg-1" style={title}>{dataSite.header.title}</div>
        <div className="text-center" style={subTitle}>{dataSite.header.subtitle}</div>
    </Row>
}