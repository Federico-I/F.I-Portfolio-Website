import React from "react";
import { useState } from "react";

function Slider ({ imgs }) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const sliderContainer = {
        height: "100%",
        width: "relative",
    };

    const imgStyles = {
        width: "100%",
        height: "100%",
        borderRadious: "10px",
        backgroundposition: "center",
        backgroundsize: "cover",
        backgroundImage: `url(${imgs[currentSlide]}.url)`,
    };
    
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

    const prevImg = () => {
        const firstSlide = currentSlide === 0;
        const newIndexPrev = firstSlide ? imgs.lenght - 1 : currentSlide - 1 ;
        setCurrentSlide(newIndexPrev);
    };

    const nextImg = () => {
        const lastSlide = currentSlide === imgs.lenght - 1;
        const newIndexNext = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndexNext);
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

    const dotClick = slideIndex => {setCurrentSlide(slideIndex)};

    return (
        <div style={sliderContainer}>
            <div styles={leftArrow} onClick={prevImg}>↽</div>
            <div styles={rightArrow} onClick={nextImg}>⇀</div>
            <div style={imgStyles}></div>
            <div style={dotDivStyle}>
                {imgs.map((Slide, slideIndex) => (
                    <div style={dotIcon} key={slideIndex} onClick={() => dotClick(slideIndex) }>•</div>
                ))}
            </div>
        </div>
    );
};



export default Slider;