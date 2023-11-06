import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {navLinks}from '../constants'
import {styles}from '../style'
import{logo,menu,close}from '../assets'
const Navbar = () => {
  const[active,setActive]=useState("")
  const [toggle, setToggle] = useState(false);
  const [navScrol,setNavScrol]=useState(false);
  window.addEventListener("scroll",(e)=>{
    if(scrollY===0){
      setNavScrol(false)
    }else{
      setNavScrol(true)
    }
  })



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





  return (
    <nav className={navScrol?`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-black-100`:`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-transparent`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className='flex items-center'>
        <Link to={`/`} className='flex items-center gap-2' onClick={()=>{setActive("");window.scroll(0,0)}}>
          <img src={logo} alt="mohamedFaried logo" className='w-14 h-14 object-contain' />
        </Link>
        <p className='ps-4 text-white text-[18px] font-bold cursor-pointer'>Mohamed Faried<span className='md:block hidden '>| Front-End Developer</span></p>
        </div>
        <ul className='list-none hidden sm:flex flex-row items-center gap-10'>
        {navLinks.map((link)=>(
          <li
            key={link.id} className={`${active===link.title?"text-white":"text-secondary"} hover:text-white text-[18px] font-medium cursor-pointer`} onClick={()=>setActive(link.title)}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        )
        )}
        
          <li>
            {mobail?"":<a href='https://www.mediafire.com/file/p5b6l5mrt6qz9t3/mohamed_faried.pdf/file' target='_blank' className="cursor-pointer bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                <span>Download CV</span>
            </a>}

          </li>  
        </ul> 
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu} alt="menu" className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={()=>setToggle(!toggle)}/>
          <div className={`${!toggle? `hidden`:`flex`} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
        {navLinks.map((link)=>(
          <li
            key={link.id} className={`${active===link.title?"text-white":"text-secondary"} font-poppins text-[16px] font-medium cursor-pointer`} onClick={()=>{setToggle(!toggle);setActive(link.title)}}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        )
        )}  
        </ul>  
          </div>
        </div>
     </div>
    </nav>
  )
}

export default Navbar