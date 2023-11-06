import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import {styles} from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  const[mobail,setMobile]=useState(false)
  useEffect(()=>{
    const query=window.matchMedia('(max-width : 900px)');
    setMobile(query.matches);
    const handelMatch=(event)=>{
      setMobile(event.matches);
    }
    query.addEventListener('change',handelMatch)
    return()=>{
      query.removeEventListener('change',handelMatch)
    }
  },[])
  return <>
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center mt-5'>
      <div className='w-5 h-5 rounded-full bg-[#955eee]'/>
      <div className='w-1 sm-h-80 h-40 violet-gradient'/>
      </div>
      <div >
        <h1 className={`${styles.heroHeadText} text-white`}>Hi , I'm <span className='text-[#955eee] '>Mohamed</span></h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I'm FrontEnd Developer
          <br className='' />
          create websites and web applications
        </p>
      </div>
      </div>
{mobail?<div className='absolute xs:bottom-10 top-1/3 h-2/3 w-full flex justify-center items-center ' >
  <div className='w-full h-2/3'>
      <ComputersCanvas/>
  </div>
</div>:      <ComputersCanvas/>
}
      <div className='absolute xs:bottom-10 bottom-5  w-full flex justify-center items-center '>
        <a href="#about">
      <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center p-2'>
        <motion.dev className="w-3 h-3 rounded-full bg-secondary mb-1" animate={{y:[0,24,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}}/>
      </div>
        </a>
      </div>
    </section>
    </>
}

export default Hero