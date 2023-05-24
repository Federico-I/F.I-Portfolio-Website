import React from "react";
import { useState } from "react";

function Slider ({ imgs }) {

    const photoSlider = (imgs) => {
        
        const [currentSlide, setCurrentSlide] = useState(0);
        
        return (
            <div>
                <div style={{backgroundImage: `url(${imgs[currentSlide]}.url)`}}></div>
            </div>
        );
    };

    return ()
};



export default Slider;