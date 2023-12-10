import {Col, Image, Row} from "react-bootstrap";
import React from "react";
import GabeContainer from "../utils/GabeContainer";
import ReportForm from "./ReportForm";
import data from "../../data/data";


export default function Report() {
    return <GabeContainer>
        <Row className="justify-content-between">
            <Col className="pb-4">
                <div className="text pb-3">{data.report.upText}</div>
                <div className="mt-3 mb-3">
                    {data.report.contacts.map(({icon, href, name, id}) => (
                        <Row key={id} xs="auto"
                             className="justify-content-start align-items-center p-1 p-sm-1 p-md-1 p-lg-0 p-xl-0">
                            <a href={href} className="noStyle">
                                <Image className="icon" src={icon}/>
                            </a>
                            <a href={href} className="noStyle stats text p-0">{name}</a>
                        </Row>))}
                </div>
                <div className="text">
                    {data.report.btText}
                </div>
            </Col>
            <Col>
                <ReportForm/>
            </Col>
        </Row>
    </GabeContainer>
}