import {Col, Container, Image, Row} from "react-bootstrap";
import React from "react";
import siteData from "../siteData";

const title = {
    fontSize: "max(2.7vw, 1.5em)",
    lineHeight: "1.2"
}
const backPhoto = {
    backgroundImage: "radial-gradient(#2942FF, transparent 70%)",
    backgroundRepeat: "no-repeat no-repeat",
    backgroundSize: "max(13vw, 13em) max(13vw, 13em)",
    backgroundPosition: "70% 30%"
}
const participantName = {
    fontSize: "max(2vw, 2em)",
    color: "#576BFF",
    lineHeight: "1.2"
}

const iconStyle = {
    width: "max(2vw, 1.7em)",

}

const stats = {
    width: 'auto',
    fontFamily: "Bahnschrift, sans-serif",
    fontSize: "max(1.2vw, 0.9em)",
}

function Card({participant}) {
    return <Container style={{width: "max(20vw, 17em)"}} className="m-4">
        <Row style={backPhoto}>
            <a href={participant.statistics[0].href}><Image src={participant.photo} style={{width: "100%"}}></Image></a>
        </Row>
        <Row className="mt-3">
            <div style={participantName}>{participant.name}</div>
        </Row>
        <Row xs="auto" className="mt-1 justify-content-start">
            {participant.statistics.map(({icon, href, audience}) => (
                <Col>
                    <Row xs="auto" className="align-items-center">
                        <Col className="p-0 ms-2 me-2">
                            <a href={href} className="noStyle">
                                <Image style={iconStyle} src={icon}/>
                            </a>
                        </Col>
                        <Col className="p-0 me-2">
                            <a href={href} className="noStyle">
                                <div style={stats}>{audience}</div>
                            </a>
                        </Col>
                    </Row>
                </Col>))}
        </Row>
    </Container>
}


export default function Teem() {
    return <Row className="justify-content-around mt-5 ps-3 pe-3 ps-sm-3 pe-sm-3 ps-md-3 pe-md-3 ps-lg-4 pe-lg-4">
        <h3 className="mt-0 mt-sm-2 mt-md-3 mt-lg-4" style={title}>{siteData.team.title}</h3>
        {siteData.team.participants.map(p => <Card participant={p}/>)}
    </Row>
}