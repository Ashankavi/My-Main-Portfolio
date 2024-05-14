import React from 'react'
import { motion } from "framer-motion"

import EduBack1 from "../Components/Assets//educationback1.png"
import EduBack2 from "../Components/Assets//educationback2.png"

const Education = () => {
  return (
    <div className="w-full max-h-[100vh] bg-center bg-cover border-black border-y-4  mt-40" style={{backgroundImage: `url(${EduBack1})`}}>
        <div className='-mt-20 bg-cover max-w-auto mx-8 border-4 border-black rounded-[29px] mb-8' style={{backgroundImage: `url(${EduBack2})`}}>
        <motion.h1 
              whileInView={{opacity: 1, y:0}}
              initial={{ opacity: 0, y: -100}}
              transition={{duration:0.5}}
               className='pt-6 ml-10 text-3xl uppercase font-londrina' >Education</motion.h1>
        {/* <img className='bg-cover max-w-auto mx-8 border-4 border-black rounded-[29px] mb-8' src={EduBack2}/>  */}

        <div className='flex items-center justify-center px-8 text-center font-londrina '>
        <div className='grid grid-cols-1 gap-[50px] md:grid-cols-2 lg:grid-cols-2'>
        <motion.div 
                  whileInView={{opacity: 1, x:0}}
                  initial={{ opacity: 0, x: -100}}
                  transition={{duration:0.5}}
                   className='flex flex-col p-5'>
            <h1 className='text-3xl '>2022 Present</h1>
            <p>Bsc (Hons). in Computing <br />Successfully Completed <br />IDM National Campus</p>

            <h1 className='mt-8 text-3xl '>2021 Present</h1>
            <p>Diploma in Information Technology (DITEC) (2021) <br />Successfully Completed <br />ESOFT Metro Campus</p>

            <h1 className='mt-8 text-3xl '>2014 Present</h1>
            <p>IDM E-Kids (Explore Kids) L05 <br />Successfully Completed | <br />Certificate No: 19-0310-3101-10561</p>
        </motion.div>

        <motion.div 
                  whileInView={{opacity: 1, x:0}}
                  initial={{ opacity: 0, x: 100}}
                  transition={{duration:0.5}}
                   className='flex flex-col p-5'>
            <h1 className='text-3xl '>2020 Present</h1>
            <p>G.C.E. Advanced Level (2020) <br />Vidyaloka College, <br />Galle</p>

            <h1 className='mt-8 text-3xl '>2027 Present</h1>
            <p>G.C.E. Ordinary Level (2017) <br />Vidyaloka College,<br /> Galle</p>

            <h1 className='mt-8 text-3xl '>Self Learning Platforms</h1>
            <p>W3School , Coursera, TailwindCSS, <br />React</p>
        </motion.div>      
        </div>
    </div>
        </div>
    </div>
  )
}

export default Education
