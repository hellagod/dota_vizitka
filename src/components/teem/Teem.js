import {Row} from "react-bootstrap";
import React from "react";
import Card from "./Card";
import data from "../../data/data";
import { CCarousel, CCarouselItem} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Container from "../utils/Container";

export default function Teem() {
    return <CCarousel controls indicators className="mb-5 gabs">
        <CCarouselItem>
            <Container>
                <Row className="justify-content-around pad-teem">
                    {data.team.participants.map(p => <Card key={p.name} participant={p}/>)}
                </Row>
            </Container>
        </CCarouselItem>
        <CCarouselItem>
            <Container>
                <Row className="justify-content-around pad-teem">
                    {data.team.participants.map(p => <Card key={p.name} participant={p}/>)}
                </Row>
            </Container>
        </CCarouselItem>
    </CCarousel>

}