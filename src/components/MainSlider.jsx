import React from "react";
import { useState } from "react";
/* 
slider logic - 

need to create state funtion and store current position. 
update state on every onClick (event-listener) to setState and change slides

style buttons (animation?)
*/

function MainSlider ({ imgData }) {

    const imgsPhotos = imgData.map( (item) => {
        item.imgLinkSlides
    });

    const photoSlider = (imgsPhotos) => {
        
        const [currentSlide, setCurrentSlide] = useState(0);
        
        
        return {

        };
    };
    
    return (
        <div>
            <div>photoSlider</div>
        </div>
    )
    
};

export default MainSlider;