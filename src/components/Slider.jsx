import React from "react";
import { useState } from "react";

function Slider ({ imgs }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const imgsStyles = {
        backgroundImage: `url(${imgs[currentSlide]}.url)`,
    };
        
    return (
        <div>
            <div style={imgsStyles}></div>
        </div>
    );
};



export default Slider;