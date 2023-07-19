import React from "react";
import Slider from "./Slider";

function MainSlider({ imgData }) {

    const imgsPhotos = imgData.map( (item) => {
        return (item.imgLinkSlides);
    });

    console.log(imgsPhotos);

    const backgroundTest = "https://p4.wallpaperbetter.com/wallpaper/390/840/968/zhangjiajie-national-forest-park-china-cliffs-mountains-fog-wallpaper-preview.jpg";
    
    const sliderContainer = {
        height: "100%",
        width: "100%",
        // backgroundImage: `url(${backgroundTest})`,
    };

    

    return (
        <>
            <div className="flex flex-col p-10 " style={sliderContainer} >
                <h1 className="font-sans font-bold text-2xl rounded" >Slider Test</h1>
                <Slider  imgs={imgsPhotos} />
            </div>
        </>
    )

    // {sliderContainer}
    
};

export default MainSlider;
