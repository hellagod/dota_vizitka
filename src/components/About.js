import {Image} from "react-bootstrap";
import React from "react";
import GabeContainer from "./utils/GabeContainer";
import data from "../data/data";


export default function About() {
    return <div className="justify-content-center">
        <GabeContainer>
            <div>
                <div className="text">{data.about.title}</div>
            </div>
            <div>
                <div className="text">
                    {data.about.text} <Image className='smile' src={data.about.emoji}/>
                </div>
            </div>
        </GabeContainer>
    </div>
}

