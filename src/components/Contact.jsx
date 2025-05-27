import React, { useState } from 'react';
import SectionHeading from '../common/titleSection';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    
    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "****-*****-****");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.error("Error", data);
        toast.error(data.message || "Submission failed. Please try again.");
        setResult("");
      }
    } catch (error) {
      console.error("Network error:", error);
      toast.error("Network error. Please check your connection and try again.");
      setResult("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: -200 }} 
      transition={{ duration: 1 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      viewport={{ once: true }}
      className='container mx-auto px-4 py-16 sm:px-6 lg:px-8 max-w-4xl' 
      id='Contact'
    >
      <SectionHeading mainText={'Contact'} highlightedText={'With Us'} />
      <p className='text-lg text-gray-600 mb-10'>
        Ready to Make a Move? Let's Build Your Future Together
      </p>

      <form onSubmit={onSubmit} className='bg-white shadow-md rounded-lg p-6 md:p-8'>
        <div className='flex flex-wrap -mx-3 mb-6'>
          <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='name'>
              Your Name
            </label>
            <input
              id='name'
              type='text'
              className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
              name='Name'
              placeholder='Your Name'
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-3'>
            <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='email'>
              Your Email
            </label>
            <input
              id='email'
              type='email'
              className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500'
              name='Email'
              placeholder='your.email@example.com'
              required
            />
          </div>
        </div>

        <div className='mb-6'>
          <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2' htmlFor='message'>
            Message
          </label>
          <textarea
            id='message'
            className='appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-500 h-48 resize-none'
            name='Message'
            placeholder='Your message here...'
            required
          />
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            disabled={isSubmitting}
            className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${
              isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className='flex items-center'>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {result || "Send Message"}
              </span>
            ) : (
              result || "Send Message"
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Contact;
