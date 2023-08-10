import React from "react";
import Slider from "./Slider";
import { FaRegHandPointDown } from "react-icons/fa"

function MainSlider({ imgData }) {
    
    const sliderContainer = {
        height: "100%",
        width: "100%",
    }; 

    const imgsData = imgData.map((item) => (item.ImageLinkSlSider));

    console.log(imgsData);

    return (
        <>
            <div className="flex flex-col p-10 " style={sliderContainer} >
                <div className="flex flex-col p-10">
                    <h1 className="w-full font-sans font-bold text-4xl pb-5 rounded text-white text-center"> Places to visit...  </h1>
                    <FaRegHandPointDown className="w-full text-4xl text-white text-center "/>
                </div>
                <Slider imgs={imgsData} />
            </div>
        </>
    )
};

export default MainSlider;


//  <Slider style={{backgroundImage: `url(${backgroundTest})`}} imgs={imgData} />

/* 
/////////////////    ////////////////

    const backgroundTest = "https://p4.wallpaperbetter.com/wallpaper/390/840/968/zhangjiajie-national-forest-park-china-cliffs-mountains-fog-wallpaper-preview.jpg";
*/