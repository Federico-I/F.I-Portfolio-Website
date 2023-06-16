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
    
    const leftArrow = {
        position: "absolute",
        top: "50%",
        trasnform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrow = {
        position: "absolute",
        top: "50%",
        trasnform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    return (
        <div style={sliderContainer}>
            <div styles={leftArrow} onClick={prevImg}>↽</div>
            <div styles={rightArrow} onClick={nextImg}>⇀</div>
            <div style={imgsStyles}></div>
        </div>
    );
};



export default Slider;