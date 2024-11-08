'use client'
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 1150,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 4,
            },
        },
    ]
};

const Displayer = ({ data }) => {
    return (
        <div width='100%' minHeight='40vh' overflow='hidden' marginBottom='1rem' position='relative' display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
            <div width='93%' display='flex' alignItems='center' flexDirection='column' gap='2.4rem'>
                <div width='100%' marginTop='2rem'>
                    <Slider {...settings}>
                        {data.map((testimonial, index) => (
                            <div key={index} padding='0.2rem' cursor='pointer' overflow='hidden' borderRadius='0.5rem'>
                                <img borderRadius='0.3rem' width='8rem' objectFit='cover' src={testimonial.imgSrc} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Displayer;
