import React from "react";
import arrowR from "../Data/Images/arrow-right.png"
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Slider({ imgs }) {

    const backgroundTest = "https://p4.wallpaperbetter.com/wallpaper/390/840/968/zhangjiajie-national-forest-park-china-cliffs-mountains-fog-wallpaper-preview.jpg";

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <>
            <div className="w-full font-titleFont text-white px-10 rounded-t-lg md:bg-black md:opacity-90 capitalize">
                <div className="flex flex-col justify-center w-full h-full p-10 bg-transparent text-center">
                    <div className="flex flex-col justify-evenly ">
                        <img className="p-8 rounded-t-lg" src={backgroundTest} alt="test"></img>
                        <div className="flex flex-row justify-around p-5">
                            <FaArrowLeft className="fill-blue-500 stroke-cyan-400 hover hover:red-700" />
                            <FaArrowRight className="fill-blue-500 stroke-cyan-400 hover hover:red-800" />
                        </div>
                    </div>
                    <p>Place Name - dynamic</p>
                </div>
            </div>
        </>
    );
};

export default Slider;



/* 
    ///////////////// Slide classes /////////////////

    slice className="flex items-center justify-center w-full h-full pt-10 bg-transparent text-center"


    const sliderContainer = {
        height: "100%",
        width: "100%",
    };

    const backgroundTest = "https://p4.wallpaperbetter.com/wallpaper/390/840/968/zhangjiajie-national-forest-park-china-cliffs-mountains-fog-wallpaper-preview.jpg";
    
    const leftArrow = {
        position: "absolute",
        top: "50%",
        trasnform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };

    const rightArrow = {
        position: "absolute",
        top: "50%",
        trasnform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
    };
    
    const dotDivStyle = {
        position: "flex",
        justifyContent: "center",
    };

    const dotIcon = {
        margin: "0 3px",
        cursor: "pointer",
        fontSize: "20px",
    }

    const imgStyles = {
        width: "100%",
        height: "100%",
        borderRadious: "10px",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundImage: `url(${imgs[currentSlide].url})`,
    };

    //////////////////////////////////  styles ////////////////////////

        const theImgs = imgs.ImgLinkSlides; 
    
    const prevImg = () => {
        const firstSlide = currentSlide === 0;
        const newIndexPrev = firstSlide ? theImgs.lenght - 1 : currentSlide - 1 ;
        setCurrentSlide(newIndexPrev);
    };

    const nextImg = () => {
        const lastSlide = currentSlide === theImgs.lenght - 1;
        const newIndexNext = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndexNext);
    };
        
    const dotClick = slideIndex => {setCurrentSlide(slideIndex)};



    return(
        <>
            <div style={sliderContainer}>
                <div style={imgStyles}>
                    <div style={dotDivStyle}>
                        {theImgs.map((Slide, slideIndex) => (
                         <div style={dotIcon} key={slideIndex} onClick={() => dotClick(slideIndex)}>•</div>
                        ))}
                    </div>
                    Hello World
                    <div styles={leftArrow} onClick={prevImg}>↽</div>
                    <div styles={rightArrow} onClick={nextImg}>⇀</div>
                </div>
            </div>
        </>
    )

      ////////////////// arrow buttons ////////////////////////////////

         <button  className=" p-7  decoration-red-300 rounded-full hover hover:bg-red-500" >↽<FaArrowRight /></button>
                            <button className=" p-7 decoration-red-300 hover hover:bg-red-500" >⇀</button>;

*/