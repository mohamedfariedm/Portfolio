import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../style'
import {testimonials} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
const FeedbackCard = ({ index,testimonial,name,designation,company,image }) => (
  <Tilt className=''>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full  bg-black-200 p-10 rounded-3xl xs:w-[320px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
      >
        <p className='font-black text-white text-[48px]'>"</p>
        <div className='flex justify-between pb-4 px-4'>
        <img  src={image} className='w-10 h-10 rounded-full object-cover'></img>
        <h3 className='text-center text-[25px]'>{name}</h3>
        </div>
        <p className='text-center blue-text-gradient '>{designation} <span className='text-white font-medium text-[20px]'>{company}</span></p>
        <p className=''>{testimonial}</p>
      </div>
    </motion.div>
  </Tilt>
);



const Feedbacks = () => {
  return <>
      <motion.div variants={textVariant()}>
    <p className={`${styles.sectionSubText}`}>Feedbacks</p>
    <h2 className={`${styles.sectionHeadText}`}>Testimonials</h2>
  </motion.div>


  <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples.
        </motion.p>
      </div>

  
  <div className='mt-20 flex flex-wrap gap-10'>
        {testimonials.map((service, index) => (
          <FeedbackCard key={index} index={index} {...service} />
        ))}
      </div>
  
  
  </>
}

export default SectionWrapper(Feedbacks,"")