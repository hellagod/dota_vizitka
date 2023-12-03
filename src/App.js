import {Container, Row} from "react-bootstrap";
import Title from "./components/Title";
import About from "./components/About";
import Teem from "./components/Teem";
import Report from "./components/Report";
import React from "react";

function App() {
    return (
        <div className="gabs p-4 p-sm-4 p-md-5 p-lg-5">
            <Container>
                <Title/>
                <Row className="p-0 p-sm-1 p-md-2 p-lg-3"/>
                <About/>
                <Teem/>
                <Report/>
            </Container>
        </div>
    );
}

export default App;
