import Form from 'react-bootstrap/Form';
import {Col, Image, Row} from "react-bootstrap";
import React from "react";
import siteData from "../siteData";
import Logo from "./Logo";

const text = {
    fontWeight: 500, lineHeight: "1.1", fontSize: "max(2vw, 1.2em)",
}

const iconStyle = {
    width: "max(2vw, 1.2em)", height: "max(2vw, 1.2em)"
}

const stats = {
    width: 'auto', position: "relative", float: "left", fontSize: "max(2vw, 1.2em)",
}

export default function Report() {
    return <Row className="justify-content-center mt-5 mb-3 pb-3 pt-4 ps-3 pe-3
    ps-sm-3 pe-sm-3
    ps-md-3 pe-md-3
    ps-lg-5 pe-lg-5
    main">
        <Row className="mb-3">
            <Logo/>
        </Row>
        <Row className="justify-content-between">
            <Col xs lg="5" className="ps-0 mb-5 ">
                <div style={text} className="mb-3">{siteData.report.upText}</div>
                    {siteData.report.contacts.map(({icon, href, name}) => <Row xs="auto" className="justify-content-start align-items-center">
                        <a href={href} className="p-0 ps-3 noStyle">
                            <Image style={iconStyle} src={icon}/>
                        </a>
                        <a style={stats} href={href} className="p-0 ms-2 noStyle">{name}</a>
                    </Row>)}
                <div style={text} className="mt-3">
                    {siteData.report.btText}
                </div>
            </Col>
            <Col xs lg="5">
                <Form action={"http://www.htmlbook.ru"} style={{maxWidth: '30em', minWidth: '15em'}}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder={siteData.report.form.name}/>
                        <br/>
                        <Form.Control type="tel" placeholder={siteData.report.form.phone}/>
                        <br/>
                        <Form.Control type="email" placeholder={siteData.report.form.email}/>
                        <br/>
                        <Form.Control as="textarea" type="text" placeholder={siteData.report.form.comment}/>
                        <br/>
                        <Form.Control type="submit" value={siteData.report.form.btn}/>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Row>


}