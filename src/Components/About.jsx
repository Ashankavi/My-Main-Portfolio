import React from 'react'
import { motion } from "framer-motion"

import AboutImg from "../Components/Assets/about.png"
import AboutMyImg from "../Components/Assets/aboutimage.jpg"

const About = () => {
  return (
<div className='z-20 mt-8 font-londrina'>
      <div className=" bg-cover max-w-auto mx-8 border-4 border-black rounded-[29px]" style={{backgroundImage: `url(${AboutImg})`}}>
        <motion.h1 
              whileInView={{opacity: 1, y:0}}
              initial={{ opacity: 0, y: -100}}
              transition={{duration:0.5}}
        className='pt-6 ml-10 text-3xl'>About Me</motion.h1>
        <div className='grid mx-auto md:grid-cols-2'>
          <motion.div 
              whileInView={{opacity: 1, x:0}}
              initial={{ opacity: 0, x: -100}}
              transition={{duration:0.5}}
          className='w-[450px] bg-cover max-w-auto ml-20 my-4 border-4 border-white rounded-[25px]' style={{backgroundImage: `url(${AboutMyImg})`}}></motion.div>
        {/* <img className=' w-[450px] bg-cover max-w-auto ml-10 my-4 border-4 border-white rounded-[25px]' src={AboutMyImg} />  */}
        
        <motion.div 
                  whileInView={{opacity: 1, x:0}}
                  initial={{ opacity: 0, x: 100}}
                  transition={{duration:0.5}} 
                  className='flex flex-col justify-center px-8 py-8 ml-10 tracking-wide font-londrina'>
            <h1 className='py-4 text-5xl text-black md:text-8xl sm:text-4xl '>Hello</h1>
            <h1 className='leading-none text-white uppercase md:text-2xl sm:text-2xl text-1xl text-shadow'>I’m creative Front-End Web Developer & UI UX  Designer, I look forward to improving my skills at every turn.</h1>  

            <p className=" text-[20px]  text-[#000000] font-bold  tracking-wide leading-10  mr-[60px] font-londrina">Age <br/> Nationality <br /> Freelance <br />Address<br /> <br />Phone <br /><br />Email <br />Language</p>
            <p className=" text-[15px] ml-[150px] -mt-[360px] text-[#000000] font-black tracking-wide leading-10  font-londrina ">: <br/> : <br /> : <br /> : <br /><br />: <br /><br />: <br />:</p>
            <p className="  text-[20px] ml-[220px] -mt-[360px] text-[#000000]  tracking-wide leading-10  font-londrina ">23 <br/> Sri Lanka <br /> Available <br />No 300, Citrus Junction<br /> Narawala, Poddala<br />+94 77 565 5031 <br />+94 70 181 1431 <br />uhashankavi@gmail.com <br />English, Sinhala</p>

          <div>
            <button className=" mt-[20px] px-8 py-3 text-[15px] text-black tracking-widest font-bold bg-gradient-to-r from-[#def9fa] to-[#95ffff] ring-2 ring-blue-300 float-left rounded-[30px] uppercase">download cv</button>
            </div>
        </motion.div>           
        </div>
      </div>
    </div>
  )
}

export default About
