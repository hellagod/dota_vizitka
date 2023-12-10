import Logo from "./Logo";
import React from "react";

export default function GabeContainer({children}) {
    return <div className="justify-content-center main">
        <div>
            <Logo/>
        </div>
        {children}
    </div>
}