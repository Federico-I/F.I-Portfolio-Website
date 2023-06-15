import React from "react";
import { useState } from "react";

function Slider ({ imgs }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderContainer = {
        height: "100%",
        width: "relative",
    };

    const imgsStyles = {
        width: "100%",
        height: "100%",
        borderRadious: "10px",
        backgroundposition: "center",
        backgroundsize: "cover",
        backgroundImage: `url(${imgs[currentSlide]}.url)`,
    };
        
    return (
        <div style={sliderContainer}>
            <div styles={leftArrow}><</div>
            <div styles={rightArrow}>></div>
            <div style={imgsStyles}></div>
        </div>
    );
};



export default Slider;