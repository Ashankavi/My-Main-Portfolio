import React from 'react'
import { motion } from "framer-motion"

import SkillImg from "../Components/Assets/skillback1.jpg"
import SkillImg2 from "../Components/Assets/skillback2.jpg"
import Communi from "../Components/Assets/Skills/1.png"
import Speed from "../Components/Assets/Skills/2.png"
import SelfM from "../Components/Assets/Skills/3.png"
import TeamW from "../Components/Assets/Skills/4.png"
import CSharp from "../Components/Assets/Skills/csharp_icon.png"
import Figma from "../Components/Assets/Skills/figma_icon.png"
import Java from "../Components/Assets/Skills/java_icon.png"
import Illu from "../Components/Assets/Skills/illu_icon.png"
import JS from "../Components/Assets/Skills/js_icon.png"
import PS from "../Components/Assets/Skills/photoshop_icon.png"
import ReactJS from "../Components/Assets/Skills/react_icon.png"
import Tailwind from "../Components/Assets/Skills/tailwind_icon.png"
import HTML from "../Components/Assets/Skills/html_icon.png"
import CSS from "../Components/Assets/Skills//css_icon.png"




const Skills = () => {
  return (
    <div className="w-full bg-center bg-cover border-black border-y-4 " style={{backgroundImage: `url(${SkillImg})`}}>
        <div className='bg-cover max-w-auto  border-4 border-black rounded-[29px] m-8' style={{backgroundImage: `url(${SkillImg2})`}}>
        <motion.h1 
            whileInView={{opacity: 1, y:0}}
            initial={{ opacity: 0, y: -100}}
            transition={{duration:0.5}} 
            className='pt-6 ml-10 text-3xl uppercase font-londrina' >skills</motion.h1>
        {/* <img className='bg-cover max-w-auto mx-8 border-4 border-black rounded-[29px] mb-8' src={EduBack2}/>  */}

        <div className='flex items-center justify-center px-8 text-center font-londrina '>
        <div className='grid grid-row-1 gap-[50px] md:grid-row-3 lg:grid-row-3'>
        <motion.h1
                  whileInView={{opacity: 1, x:0}}
                  initial={{ opacity: 0, x: -100}}
                  transition={{duration:0.5}}
                  className='text-3xl '>PROFESSIONAL SKILLS
         </motion.h1>

        <motion.div 
                  whileInView={{opacity: 1, x:0}}
                  initial={{ opacity: 0, x: -100}}
                  transition={{duration:0.5}}
        className='flex flex-row gap-2 p-5 max-w-auto'>
            <img className=' w-[100px] mx-auto my-4' src={Java} /> 
            <img className=' w-[100px] mx-auto my-4' src={CSharp} /> 
            <img className=' w-[100px] mx-auto my-4' src={ReactJS} /> 
            <img className=' w-[100px] mx-auto my-4' src={Tailwind} /> 
            <img className=' w-[100px] mx-auto my-4' src={JS} /> 
            <img className=' w-[100px] mx-auto my-4' src={HTML} /> 
            <img className=' w-[100px] mx-auto my-4' src={CSS} /> 
            <img className=' w-[100px] mx-auto my-4' src={PS} /> 
            <img className=' w-[100px] mx-auto my-4' src={Illu} /> 
            <img className=' w-[100px] mx-auto my-4' src={Figma} /> 
        </motion.div>

        <motion.h1
                  whileInView={{opacity: 1, x:0}}
                  initial={{ opacity: 0, x: 100}}
                  transition={{duration:0.5}} 
                  className='text-3xl '>PERSONAL SKILLS</motion.h1>
        <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration:0.5}}
        className='flex flex-row p-5'>
            <img className=' w-[150px] mx-auto my-4' src={Communi} /> 
            <img className=' w-[150px] mx-auto my-4' src={SelfM} /> 
            <img className=' w-[150px] mx-auto my-4' src={Speed} /> 
            <img className=' w-[150px] mx-auto my-4' src={TeamW} /> 
        </motion.div>      
        <motion.div 
            whileInView={{opacity: 1, x:0}}
            initial={{ opacity: 0, x: 100}}
            transition={{duration:0.5}}
        className='flex flex-row items-center justify-center -mt-20 text-xl text-center gap-[200px]'>
            <h1>Communication</h1>
            <h1>Self Motivation</h1>
            <h1>Speed</h1>
            <h1>Team Work</h1>
        </motion.div>   

        </div>
    </div>
        </div>
    </div>
  )
}

export default Skills
