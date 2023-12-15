import {Row} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import Card from "./Card";
import data from "../../data/data";
import {CCarousel, CCarouselItem} from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'
import Container from "../utils/Container";
import emptyPhoto from '../../data/img/empty.png'
import emptyIcon from '../../data/icons/empty.svg'

function sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        let chunk = arr.slice(i, i + chunkSize);
        res.push(chunk.map(p => <Card key={p.name} participant={p}/>));
    }

    const last = chunkSize - (arr.length % chunkSize == 0? chunkSize : arr.length % chunkSize)
    for (let i = 0; i < last; i++) {
        res[res.length-1].push(<Card key={i} empty={"empty"} participant={{
            name: ".",
            photo: emptyPhoto,
            statistics: [
                {
                    href: "",
                    icon: emptyIcon,
                    audience: ".",
                    id: 0
                }
            ]
        }}/>)
    }
    return res;
}

export default function Teem() {
    const [teem, setTeem] = useState(sliceIntoChunks(data.team.participants, 6))
    const [isSmall, setIsSmall] = useState(window.innerWidth < 1150)
    const handleResize = (e) => {
        setIsSmall(e.target.innerWidth < 1150)
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isSmall)
            setTeem(sliceIntoChunks(data.team.participants, 4))
        else
            setTeem(sliceIntoChunks(data.team.participants, 6))
    }, [isSmall]);

    return <CCarousel controls indicators className="mb-5 gabs">
        {teem.map((par, index) =>  <CCarouselItem key={index}>
            <Container>
                <Row className="justify-content-around pad-teem">
                    {par}
                </Row>
            </Container>
        </CCarouselItem>)}
    </CCarousel>

}