import React from 'react'
import { motion } from "framer-motion"

import ServiceBack from "../Components/Assets/Serviceback.jpg"
import UIUX from "../Components/Assets//UI.png"
import Graphic from "../Components/Assets/graphic.png"
import Web from "../Components/Assets//web.png"



const Service = () => {
  return (
    <div className="w-full h-auto my-8 bg-center bg-cover border-black border-y-4" style={{backgroundImage: `url(${ServiceBack})`}}>
        <div>
        <motion.h1 
              whileInView={{opacity: 1, y:0}}
              initial={{ opacity: 0, y: -100}}
              transition={{duration:0.5}}
               className='pt-6 ml-10 text-3xl font-londrina'>Service</motion.h1>

    <div className='flex items-center justify-center min-h-screen px-8 text-center font-londrina '>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>

            <motion.div 
                  whileInView={{opacity: 1, y:0}}
                  initial={{ opacity: 0, y: -100}}
                  transition={{duration:0.5}}
                   className='rounded-[25px] border-4 border-black bg-[#72e2ff]'> 
            <div className='flex flex-col p-5'>
                <img className='' src={UIUX} /> 
                </div>
                <h5 className='mt-3 text-2xl tracking-wide text-white md:text-5xl'>UI/UX DESIGN</h5>
                <p className='mt-3 mb-8 text-xl font-normal tracking-wide md:text-2xl'>Mobile Application,<br />Web Application Design</p>
            </motion.div>

            <motion.div 
                  whileInView={{opacity: 1, y:0}}
                  initial={{ opacity: 0, y: 100}}
                  transition={{duration:0.5}}
                   className=' rounded-[25px] border-4 border-black bg-[#72e2ff]'>
            <div className='flex flex-col p-5'>
                <img className='' src={Web} /> 
                </div>
                <h5 className='mt-3 text-2xl tracking-wide text-white md:text-5xl'>WEB DESIGN</h5>
                <p className='mx-5 mt-3 mb-8 text-xl font-normal tracking-wide md:text-2xl'>All stand alone web development with React, Tailwinds, HTML, Java Script</p>
            </motion.div>
            
            <motion.div 
                  whileInView={{opacity: 1, y:0}}
                  initial={{ opacity: 0, y: -100}}
                  transition={{duration:0.5}}
                   className='rounded-[25px] border-4 border-black bg-[#72e2ff]'>
            <div className='flex flex-col p-5'>
                <img className='' src={Graphic} /> 
                </div>
                <h5 className='mt-3 text-2xl tracking-wide text-white md:text-5xl'>GRAPHIC DESIGN</h5>
                <p className='mt-3 mb-8 text-xl font-normal tracking-wide md:text-2xl'>Logo, Flyer, Banner,<br /> Icons, Vector Design</p>
            </motion.div>
        </div>
     
    {/* <div className='text-white font-londrina bg-slate-900'>
        <div className='items-center py-10 text-center '>

            <div className='flex max-w-5xl gap-8 mx-50 '>
                <div className='p-8 bg-slate-700 rounded-xl'>
                <img className='mx-auto h-28' src={UIUX} /> 
                <h4 className='mt-5 text-4xl tracking-wide '>UI/UX DESIGN</h4>
                <p className='my-3 text-xl font-normal leading-7 tracking-wide '>Mobile Application,<br />Web Application Design</p>
                </div>
                <div className='p-8 bg-slate-700 rounded-xl'>
                <img className='mx-auto h-28' src={Web} /> 
                <h4 className='text-4xl tracking-wide '>UI/UX DESIGN</h4>
                <p className='my-3 text-xl font-normal leading-7 tracking-wide '>Mobile Application,<br />Web Application Design</p>
                </div>
                <div className='p-8 bg-slate-700 rounded-xl'>
                <img className='mx-auto h-28' src={Graphic} /> 
                <h4 className='text-4xl tracking-wide '>UI/UX DESIGN</h4>
                <p className='my-3 text-xl font-normal leading-7 tracking-wide '>Mobile Application,<br />Web Application Design</p>
                </div>
            </div>                      
        </div>
    </div> */}
    </div>
    </div>
</div>
  )
}

export default Service
