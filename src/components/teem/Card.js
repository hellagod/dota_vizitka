import {Col, Image, Row} from "react-bootstrap";
import React from "react";
import './teem.css'


export default function Card({participant}) {
    return <div className="card-player">
        <Row>
            <a href={participant.statistics[0].href}><Image src={participant.photo} className="img-size"></Image></a>
        </Row>
        <div className="tab pt-3">
            <div className="name" >{participant.name}</div>
            <Row xs="auto" className="justify-content-start pt-2">
                {participant.statistics.map(({icon, href, audience, id}) => (
                    <Col key={id}>
                        <Row xs="auto" className="align-items-center p-2">
                            <a href={href} className="noStyle p-0">
                                <Col>
                                    <Image className="icon" src={icon}/>
                                </Col>
                            </a>
                            <a href={href} className="noStyle p-0 ps-1">
                                <Col>
                                    <div className="stats">{audience}</div>
                                </Col>
                            </a>
                        </Row>
                    </Col>))}
            </Row>
        </div>
    </div>
}