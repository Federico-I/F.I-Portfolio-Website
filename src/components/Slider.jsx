import React from "react";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaRegImage } from "react-icons/fa";

function Slider( { img } ) {

    const backgroundTest = "https://p4.wallpaperbetter.com/wallpaper/390/840/968/zhangjiajie-national-forest-park-china-cliffs-mountains-fog-wallpaper-preview.jpg";

    const [currentSlide, setCurrentSlide] = useState('0');
    
    const background1 = img.ImagesArray[currentSlide].url;

    const imgLabel = img.ImagesArray[currentSlide].url;

    console.log(background1);

    /* 
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
        
    const dotClick = slideIndex => {setCurrentSlide(slideIndex)};

    onClick={dotClick}
    */

    return (
        <>
            <div className="w-full font-titleFont text-white md:px-10 rounded-lg md:bg-black md:opacity-90 capitalize">
                <div className="flex flex-col justify-center w-full h-full md:p-10 bg-transparent text-center">
                    <div className="flex flex-col justify-evenly ">
                        <img className="p-8 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-750 opacity-75 hover:opacity-100 cursor-pointer" src={backgroundTest} alt="test"></img>
                        <div className="flex flex-row justify-around p-5 ">
                            <FaArrowLeft className=" text-3xl md:text-5xl hover hover:text-red-500 hover:bg-white rounded-full cursor-pointer" onClick={null}/>
                            { /*
                            <span className="flex flex-row justify-center text-4xl">
                                    {img.map((img, index) => 
                                        <>
                                            <FaRegImage icon="fa-regular fa-circle-dot" key={index}  className=" flex flex-row justify-center text-4xl mx-4 indicator cursor-pointer transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-750"/>
                                        </>
                                    )}
                            </span> 
                            */}
                            <FaArrowRight className="text-3xl md:text-5xl hover hover:text-green-400 hover:bg-white rounded-full cursor-pointer" onClick={null}/>
                        </div>
                    </div>
                    <p>{background1 ? imgLabel : "Place Name - Dynamic"}</p>
                </div>
            </div>
        </>
    );
};

export default Slider;


/*
/////////////   displalying carousel   ///////////////

1) Indicators done, each indiactor has a key prop to set to onClick for slider logic. 

3) label name not hsowing up

/////////////////////////////////////////////////////////



                                /////////////////// component functionality //////////////////

                                    const renderSlides = imageData.map((image) => (
                                    <div key={image.alt}>
                                        <img src={image.url} alt={image.alt} />
                                        <p className="legend">{image.label}</p>
                                    </div>
                                    ));

                                /////////////////// component ///////////////

                                <Carousel
                                showArrows={true}
                                autoPlay={true}
                                infiniteLoop={true}
                                className="carousel-container"
                                >
                                    {renderSlides}
                                </Carousel>
                            */

/*
    // setCurrentSlide = ;

    console.log(imgs);

    {imgs.map( (img, imgID) => {
        <img className="p-8 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-750 opacity-75 hover:opacity-100 cursor-pointer" key={currentSlide} src={img} alt="slider" />
    } )}

    {imgs.length.map((dots) => {
    
        <div></div>
    
    } )};
*/


/* 
    //////////////////// option 2 ///////////////////////////////

    <Carousel >
                            {imgs.map((img) => (
                                <div key={img.alt}>
                                    <img src={img.url} alt={img.alt}/>
                                    <p className="imageSlider">{img.label}</p>
                                </div>
                            ))}
                        </Carousel>








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
    

    const [currentSlide, setCurrentSlide] = useState(0);

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