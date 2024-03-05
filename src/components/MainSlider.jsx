import React from "react";
import Slider from "./Slider";
import { FaRegHandPointDown } from "react-icons/fa";

function MainSlider({ imgData }) {
    
    const sliderContainer = {
        height: "100%",
        width: "100%",
    }; 

    return (
        <>
            <div className="flex flex-col md:p-10 " style={sliderContainer} >
                <div className="flex flex-col md:p-10">
                    <h1 className="w-full font-sans font-bold text-4xl pb-5 rounded text-white text-center"> Places to visit...  </h1>
                    <FaRegHandPointDown className="w-full text-4xl text-white text-center "/>
                </div>
               {imgData.map((item)=> (
                 <Slider key={item.id} img={item}/>
               ))}
            </div>
        </>
    )
};

export default MainSlider;
