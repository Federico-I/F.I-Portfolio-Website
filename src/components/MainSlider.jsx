import React from "react";
import Slider from "./Slider";

function MainSlider({ imgData }) {

    const sliderContainer = {
        height: "100%",
        width: "100%",
        backgroundColor: "blue",
    };

    const imgsPhotos = imgData.map( (item) => {
        return (item.imgLinkSlides);
    });


    return (
        <div className="p-10 flex flex-col" style={sliderContainer}>
            <h1>Slider Test</h1>
            <Slider imgs={imgsPhotos} />
        </div>
    )
    
};

export default MainSlider;
