import Title from "./components/Title";
import About from "./components/About";
import Report from "./components/report/Report";
import React from "react";
import VideoBackground from "./components/utils/VideoBackgraund";
import Teem from "./components/teem/Teem";
import './components/main.css'

function App() {
    return (
        <div className="gabs">
            <VideoBackground>
                <Title/>
                <About/>
                <Teem/>
                <Report/>
            </VideoBackground>
        </div>

    );
}

export default App;
