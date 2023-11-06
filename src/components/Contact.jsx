import React,{useRef,useState,useEffect} from 'react'
import { motion } from 'framer-motion'
import {styles} from '../style'
import {fadeIn,textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import emailjs from '@emailjs/browser'

const Contact = () => {
  
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_x072t42",
        "template_hhf7jh8",
        {
          from_name: form.name,
          to_name: "Mohamed faried",
          from_email: form.email,
          to_email: "mohamed.faried23267@gmail.com",
          message: form.message,
        },
        "_ogs3cj5pPM7JSKlc"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  const[mobail,setMobile]=useState(false)
  useEffect(()=>{
    const query=window.matchMedia('(max-width : 400px)');
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
  <div className='xl:mt-12 xl:flex-row flext-col-reverse flex overflow-hidden '>

    <motion.div className='flex-[1] bg-black-100  p-3 rounded-2xl' variants={textVariant()}>
      <div className='pt-5 px-5'>
    <p className={`${styles.sectionSubText} `}>GET IN TOUCH</p>
    <h2 className={`${styles.sectionHeadText} `}>Contact</h2>
      </div>
    <motion.div className='flex-[1] bg-black-100 p-3 rounded-2xl' variants={textVariant()}>
    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8 p-2 '>



    <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Name...."
              className={mobail?'bg-tertiary p-4 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium':'bg-tertiary p-4  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'}
            />
          </label>

    <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="email...."
              className={mobail?'bg-tertiary p-4 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium':'bg-tertiary p-4  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'}
            />
          </label>


    <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your message</span>
            <textarea
            rows={5}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="what do you wan't to say....."
              className={mobail?'bg-tertiary p-4 w-full placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium':'bg-tertiary p-4  placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'}
            />
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary'> {loading?"loading...":"send"}</button>



    </form>
  </motion.div>
  </motion.div>
  </div>
  </>
}

export default SectionWrapper(Contact,"contact")