import React from "react";

/* 
slider logic - 

need to create state funtion and store current position. 
update state on every onClick (event-listener) to setState and change slides

style buttons (animation?)
*/

function MainSlider ({ imgData }) {

    const imgsPhotos = imgData.map( (item) => {
        item.imgLinkSlides
    }) ;

    const photoSlider = (imgsPhotos) => {
    
    }
    
    return (
        <div>
            <div>photoSlider</div>
        </div>
    )
    
};

export default MainSlider;