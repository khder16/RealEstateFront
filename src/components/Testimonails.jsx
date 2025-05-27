import React from 'react';
import SectionHeading from '../common/titleSection';
import { assets, testimonialsData } from '../assets/assets.js';
import { motion } from 'framer-motion';

const Testimonails = () => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            transition={{ duration: 1.5 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }}
            className='container mx-auto py-10 pt-20 px-4 sm:px-6 md:px-20 lg:px-32 w-full' 
            id='Testimonials'
        >
            <SectionHeading mainText={'Customer'} highlightedText={'Testimonials'} />
            <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>Real Stories from Those Who Found Home With Us</p>

            <div className='flex flex-col md:flex-row justify-center gap-8 overflow-x-auto pb-4'>
                {testimonialsData.map((testimonial, index) => (
                    <div 
                        key={index} 
                        className='min-w-[280px] md:max-w-[340px] border-0 shadow-lg rounded px-6 py-8 md:px-8 md:py-12 text-center'
                    >
                        <img 
                            className="w-16 h-16 md:w-20 md:h-20 rounded-full mx-auto mb-4" 
                            src={testimonial.image} 
                            alt={testimonial.alt} 
                        />
                        <h2 className='text-lg md:text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                        <p className='text-gray-500 text-xs md:text-sm mb-4'>{testimonial.title}</p>
                        <div className='flex items-center justify-center gap-1 mb-2'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img 
                                    key={index} 
                                    className='w-4 h-4 md:w-5 md:h-5'
                                    src={assets.star_icon} 
                                    alt={testimonial.alt} 
                                />
                            ))}
                        </div>
                        <p className='text-gray-600 text-sm md:text-base'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Testimonails;