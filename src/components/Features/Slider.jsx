import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";

function Slider( { img, ind } ) {

    const [currentSlide, setCurrentSlide] = useState(0);

    const imgs = img.ImagesArray;
    
    const background1 = imgs[currentSlide].url;

    const imgLabel = imgs[currentSlide].label;
    
    const prevImg = () => {
        const firstSlide = currentSlide === 0;
        const newIndexPrev = firstSlide ? imgs.length - 1 : currentSlide - 1 ;
        setCurrentSlide(newIndexPrev);
    };

    const nextImg = () => {
        const lastSlide = currentSlide === imgs.length - 1;
        const newIndexNext = lastSlide ? 0 : currentSlide + 1;
        setCurrentSlide(newIndexNext);
    };

    return (
        <>
            <div className="w-full font-titleFont text-white md:px-10 md:py-5 rounded-lg md:bg-black md:opacity-90 capitalize">
                <div className="flex flex-col justify-center w-full h-full  bg-transparent text-center">
                    <div className="flex flex-col ">
                        <img className="mt-3 md:p-8 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-750 opacity-100 md:opacity-75 hover:opacity-100 cursor-pointer" src={background1} alt="test" />
                        <div className="flex flex-row justify-around p-5 ">
                            <FaArrowLeft className=" text-3xl mr-3 md:text-5xl hover hover:text-red-500 sm:hover:bg-white rounded-full cursor-pointer" onClick={prevImg}/>
                            { 
                            <span className="flex flex-row justify-center text-4xl">
                                    {imgs.map((_, index) =>
                                    (
                                        <FaRegImage icon="fa-regular fa-circle-dot" key={index} onClick={() => {setCurrentSlide(index)} } className={`flex flex-row justify-center text-2xl md:text-4xl mx-2 md:mx-4 indicator cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 ${currentSlide === index ? "scale-150 duration-750 text-orange-300" : null}`}/>
                                    ))}
                            </span> 
                            }
                            <FaArrowRight className="text-3xl ml-3 md:text-5xl hover hover:text-green-400 md:hover:bg-white rounded-full cursor-pointer" onClick={nextImg}/>
                        </div>
                    </div>
                    <p className="pb-10">{background1 ? imgLabel : "Place Name - Dynamic"}</p>
                </div>
            </div>
        </>
    );
};

export default Slider;