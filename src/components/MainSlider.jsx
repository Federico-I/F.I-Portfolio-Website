import React from "react";
import Slider from "./Slider";

function MainSlider({ imgData }) {

    const sliderContainer = {
        height: "100%",
        width: "relative",
    };

    const imgsPhotos = imgData.map( (item) => {
        return (item.imgLinkSlides);
    });
    
    /* 
    const containerSlider = {
        width: "500px",
        higth: "280px",
        margin: "0 auto",
    };
    */

    return (
        <div style={sliderContainer}>
            <h1>Slider Test</h1>
            <Slider imgs={imgsPhotos} />
        </div>
    )
    
};

export default MainSlider;
