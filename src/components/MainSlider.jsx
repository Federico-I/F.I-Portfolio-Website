import React from "react";
import Slider from "./Slider";

function MainSlider({ imgData }) {

    const imgsPhotos = imgData.map( (item) => {
        return (item.imgLinkSlides);
    });

    // const backgroundTest = imgsPhotos[0].url;
    
    const sliderContainer = {
        height: "100%",
        width: "100%",
        /* backgroundImage: `url(${imgsPhotos[0].url})`, */
    };

    

    return (
        <div className="flex flex-col p-10" style={sliderContainer}>
            <h1>Slider Test</h1>
            <Slider  imgs={imgsPhotos} />
        </div>
    )
    
};

export default MainSlider;
