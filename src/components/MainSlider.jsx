import React from "react";
import Slider from "./Slider";

function MainSlider({ imgData }) {

    const backgroundTest = "https://p4.wallpaperbetter.com/wallpaper/390/840/968/zhangjiajie-national-forest-park-china-cliffs-mountains-fog-wallpaper-preview.jpg";
    
    const sliderContainer = {
        height: "100%",
        width: "100%",
    }; 

    return (
        <>
            <div className="flex flex-col p-10 " style={sliderContainer} >
                <h1 className="font-sans font-bold text-4xl pb-5 rounded text-white"> Places to visit... </h1>
                <Slider style={{backgroundImage: `url(${backgroundTest})`}} imgs={imgData} />
            </div>
        </>
    )

};

export default MainSlider;
