import Logo from "./Logo";
import React from "react";
import Container from "./Container";

export default function GabeContainer({children}) {
    return <Container>
        <div className="justify-content-center main">
            <div>
                <Logo/>
            </div>
            {children}
        </div>
    </Container>
}