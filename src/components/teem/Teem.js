import {Row} from "react-bootstrap";
import React from "react";
import Card from "./Card";
import data from "../../data/data";


export default function Teem() {
    return <Row className="justify-content-around pad-teem">
        {data.team.participants.map(p => <Card key={p.name} participant={p}/>)}
    </Row>
}