import React, { useRef } from 'react';
import { assets, projectsData } from '../assets/assets';
import Slider from "react-slick";
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
    const sliderRef = useRef(null);

    const nextSlide = () => {
        sliderRef.current.slickNext();
    };

    const prevSlide = () => {
        sliderRef.current.slickPrev();
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: false, // Disable default arrows
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <motion.div initial={{ opacity: 0, x: -200 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}

            className='container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full' id='Projects'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Projects <span className='underline underline-offset-4 decoration-1 under font-light'>Completed</span></h1>
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Crafting Spaces, Building Legacies-explore Our Portfolio</p>

            {/* Custom Buttons */}
            <div className='flex justify-end items-center mb-8'>
                <button
                    onClick={prevSlide}
                    className='p-3 bg-gray-200 rounded mr-2 cursor-pointer hover:bg-gray-300 transition'
                    aria-label='Previous Project'
                >
                    <img src={assets.left_arrow} alt="Previous" />
                </button>
                <button
                    onClick={nextSlide}
                    className='p-3 bg-gray-200 rounded cursor-pointer hover:bg-gray-300 transition'
                    aria-label='Next Project'
                >
                    <img src={assets.right_arrow} alt="Next" />
                </button>
            </div>

            {/* Slider Container */}
            <div>
                <Slider ref={sliderRef} {...settings}>
                    {projectsData.map((project) => (
                        <div key={project.id} className="px-2">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto rounded-lg shadow-md"
                            />
                            <div className="mt-2 text-2xl">
                                <h3 className="font-semibold">{project.title}</h3>
                                <p className="text-lg text-gray-600">{project.location}</p>
                                <p className="text-lg text-gray-600">{project.price}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </motion.div >
    );
};

export default Projects;