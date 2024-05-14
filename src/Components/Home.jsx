import React from 'react'
import { motion } from "framer-motion"

import Homeimg from "../Components/Assets/Home.jpg"
import MyImg from "../Components/Assets/me 4.png"

const Home = () => {
  return (
    <div className='mt-6'>
      <div className="w-full h-auto bg-center bg-cover border-black border-y-4" style={{backgroundImage: `url(${Homeimg})`}}>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <motion.div whileInView={{opacity: 1, x:0}}
         initial={{ opacity: 0, x: -100}}
         transition={{duration:0.5}}
>
        <img className=' w-[648px] mx-auto my-4' src={MyImg} /> 
        </motion.div >
        <motion.div 
                       whileInView={{opacity: 1,x:0}}
                       initial={{ opacity: 0, x: 100}}
                       transition={{duration:0.5}}
        className='flex flex-col justify-center ml-10 tracking-wide font-londrina'>
            <h1 className='py-2 text-3xl md:text-5xl sm:text-4xl text-neutral-50 '>Hello, I'm</h1>
            <h1 id="name" className='leading-none uppercase md:text-9xl sm:text-8xl text-7xl text-shadow'>Ashan <br />Kavindu</h1>  
            <h1 className=' text-[30px] md:text-5xl sm:text-4xl pb-5'>Front-End-Developer</h1>
        </motion.div>
            
        </div>

      </div>
    </div>
  )
}

export default Home
