import React from "react";
import Slider from "./Slider";

function MainSlider ({ imgData }) {

    const imgsPhotos = imgData.map( (item) => {
        item.imgLinkSlides
    });
    
    return (
        <div>
            <h1>Hello </h1>
            <div style={}>
                <Slider imgs={imgsPhotos} />
            </div>
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
