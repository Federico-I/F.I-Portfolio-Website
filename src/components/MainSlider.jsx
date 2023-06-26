import React from "react";
import Slider from "./Slider";

function MainSlider({ imgData }) {

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
        <div className="w-full h-full">
            <h1>Slider Test</h1>
            <Slider imgs={imgsPhotos} />
        </div>
    )
    
};

export default MainSlider;


/* 
slider logic - 

need to create state funtion and store current position. 
update state on every onClick (event-listener) to setState and change slides

style buttons (animation?)
*/
