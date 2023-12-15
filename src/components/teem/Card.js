import {Col, Image, Row} from "react-bootstrap";
import './teem.css'
import React from "react";


export default function Card({participant, empty=""}) {



    return <div className="card-player">
        <Row>
            <a className={`${empty}`} href={participant.statistics[0].href}><Image src={participant.photo} className="img-size"></Image></a>
        </Row>
        <div className="tab pt-3">
            <div className={`name ${empty}`}>{participant.name}</div>
            <Row xs="auto" className="icons pt-2">
                {participant.statistics.map(({icon, href, audience, id}) => (
                    <Col key={id}>
                        <Row xs="auto" className="align-items-center p-2">
                            <a href={href} className={`noStyle p-0 ${empty}`} style={{height: "fit-content"}}>
                                <Image className="icon-global" src={icon}/>
                            </a>
                            <a href={href} className={`noStyle p-0 ps-1 ${empty}`}>
                                <div className={`stats-card ${empty}`}>{audience}</div>
                            </a>
                        </Row>
                    </Col>))}
            </Row>
        </div>
    </div>
}