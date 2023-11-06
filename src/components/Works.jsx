import React, {useEffect,useState}from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'
import {styles} from '../style'
import {projects} from '../constants'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import {github} from '../assets/index'
const ServiceCard = ({ index,name,tags,image,source_code_link,description }) => {
  const[mobail,setMobile]=useState(false)
  useEffect(()=>{
    const query=window.matchMedia('(max-width : 500px)');
    setMobile(query.matches);
    const handelMatch=(event)=>{
      setMobile(event.matches);
    }
    query.addEventListener('change',handelMatch)
    return()=>{
      query.removeEventListener('change',handelMatch)
    }
  },[])


  return<div className='xs:w-[250px]  w-full'>
  <motion.div
    className=' w-full   rounded-[20px] shadow-card'
  >
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className=' bg-tertiary rounded-[20px] min-h-[280px] flex justify-evenly items-center flex-col'
    >
      <div className='relative p-2 w-full h-[230]'>
      <img
        src={image}
        alt='web-development'
        className='w-full h-40 object-cover rounded-2xl'
      />
                <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={github}
              alt='source code'
              className='w-1/2 h-1/2 object-contain'
            />
          </div>
        </div>
    <div className='mt-5 px-3 '>
      <h3 className='text-white text-[20px] font-bold text-center'>
        {name}
      </h3>
      <p className='mt-2 text-secondary text-[14px] h-[160px]'>{description}</p>
    </div>
    <div className='mt-4 flex flex-wrap gap-2'>
      {
        tags.map((tag)=>
          <p key={tag.name} className={`${tag.color} text-[14px]`}>#{tag.name}</p>
        )
      }
    </div>
      </div>
    </Tilt>
  </motion.div>
</div>
}

;
const Works = () => {
  return<> 
    <motion.div >
    <p className={`${styles.sectionSubText}`}>MY WOrk</p>
    <h2 className={`${styles.sectionHeadText}`}>ALL Projects</h2>
  </motion.div>

  <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Following projects showcases my skills and experience through
          real-world examples. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

  
  <div className='mt-20 flex flex-wrap gap-10'>
        {projects.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
  </>
}

export default SectionWrapper(Works,"work")