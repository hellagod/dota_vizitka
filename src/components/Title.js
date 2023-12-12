import {Row} from "react-bootstrap";
import React from "react";
import data from "../data/data";
import Container from "./utils/Container";


export default function Title() {
    return <Container>
        <Row className="justify-content-center">
            <div className="text-center main-title">{data.header.title}</div>
            <div className="text-center sub-title">{data.header.subtitle}</div>
        </Row>
    </Container>
}