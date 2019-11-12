import React from 'react';
import SmartSlider from "react-smart-slider";


const slidesArray = [
    {
        title: "", url: require('./../img/slide-show/isun-pardakht-1.png')
    },
    {
        title: "", url: require('./../img/slide-show/isun-pardakht-2.png')
    },
    {
        title: "", url: require('./../img/slide-show/isun-pardakht-3.png')
    },
    {
        title: "", url: require('./../img/slide-show/isun-pardakht-4.png')
    },
    {
        title: "", url: require('./../img/slide-show/isun-pardakht-5.png')
    }
];

const Slideshow = () => {

    const slideBG = require('./../img/slide-show/temp-white.png');

    return (
        <div className="w-100">
            <SmartSlider slides={slidesArray} autoSlide={true} buttonShape="square"/>
        </div>

    );
}

export default Slideshow;
