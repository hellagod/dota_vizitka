import {Container, Image, Row} from "react-bootstrap";
import React from "react";
import siteData from "../siteData";
import Logo from "./Logo";

const title = {
    fontSize: "max(2.7vw, 1.5em)",
    lineHeight: "1.2"
}

const text = {
    fontWeight: 500,
    lineHeight: "1.1",
    fontSize: "max(2vw, 1.2em)",
}

export default function About() {
    return <Row className="justify-content-center">
        <Container className="pt-4 ps-5 pb-4 pe-5 main" >
            <div className="p-0 p-sm-1 p-md-2 p-lg-2">
                <Logo/>
                <Row className="mt-2 mt-sm-3 mt-md-4 mt-lg-4">
                    <div className="p-0" style={title}>{siteData.about.title}</div>
                </Row>
                <Row className="mt-1 mt-sm-2 mt-md-2 mt-lg-2">
                    <div className="p-0" style={text}>
                        {siteData.about.text}
                    </div>
                </Row>
            </div>
        </Container>

    </Row>
}

