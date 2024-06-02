import React from 'react'
import { motion } from "framer-motion"

import ContactBack from "../Components/Assets/contactback.png"
import ContactBack2 from "../Components/Assets/contactback2.jpg"

import Mobile from "../Components/Assets/Contact/1.png"
import Email from "../Components/Assets/Contact/11.png"
import Location from "../Components/Assets/Contact/11s.png"
import Insta from "../Components/Assets/Contact/Insta.png"
import FB from "../Components/Assets/Contact/fb.png"
import Github from "../Components/Assets/Contact/git.png"
import LinkD from "../Components/Assets/Contact/in.png"

const Contact = () => {
  return (
<div className="w-full bg-center bg-cover border-black border-y-4 " style={{backgroundImage: `url(${ContactBack})`}}>
    <div className='bg-cover max-w-auto  border-4 border-black rounded-[29px] m-8' style={{backgroundImage: `url(${ContactBack2})`}}>
    <motion.h1 
            whileInView={{opacity: 1, y:0}}
            initial={{ opacity: 0, y: -100}}
            transition={{duration:0.5}}
            className='pt-6 ml-10 text-3xl uppercase font-londrina' >Contact</motion.h1>
    <div className='flex flex-row flex-wrap'>
    <div className='flex flex-col grow h-[100vh] w-[500px] items-center justify-center '>

    <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{ opacity: 0, x: -100}}
        transition={{duration:0.5}}>
      <p className="  text-[30px] text-[#ffffff] font-londrina tracking-wider hover:text-[#79e3ff]">Just Say Hello</p>
      </motion.div>

      <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{ opacity: 0, x: -100}}
        transition={{duration:0.5}}
         className="w-full max-w-md p-6 bg-[#e093ff00] rounded-lg  max-auto font-londrina tracking-wider">
        <form action="">
            <div className="mb-[25px] ">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor=""></label>
            <input placeholder="Your Name" className="w-full px-3 py-[10px] bg-[#d9fdff] rounded-xl border-[3px] border-black focus:outline-none  focus:border-[#000000]" required type="text"/>
            </div>

            <div className="mb-[25px]">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor=""></label>
            <input placeholder="Your Email" className="w-full px-3 py-[10px] bg-[#d9fdff] rounded-xl border-[3px] border-black focus:outline-none  focus:border-[#000000]" required type="email"/>
            </div>

            <div className="mb-[25px]">
            <label className="block mb-2 text-sm font-semibold text-white" htmlFor=""></label>
            <input placeholder="Your Subject" className="w-full px-3 py-[10px]  bg-[#d9fdff] rounded-xl border-[3px] border-black focus:outline-none  focus:border-[#000000]" required type="text"/>
            </div>

            <div className="mb-[25px]">
            <label className="block mb-2 text-sm font-semibold text-black" htmlFor=""></label>
            <textarea rows='4' placeholder="Your Message" className="w-full px-3 py-[10px]  bg-[#d9fdff] rounded-xl border-[3px] border-black focus:outline-none  focus:border-[#000000]" required type="text"/>
            </div>

            <div>
                <button type="submit" className="px-[40px] py-[8px] text-[15px] text-black tracking-widest font-bold bg-[#cfffb9] border-[3px] border-black rounded-xl ">SUBMIT</button>
            </div>
        </form>
        </motion.div>

      </div>

      <motion.div 
        whileInView={{opacity: 1, x:0}}
        initial={{ opacity: 0, x: 100}}
        transition={{duration:0.5}}
         className='flex flex-col justify-center p-6 tracking-wide font-londrina '>


      <p className=" text-[30px]  font-semibold text-[#ffffff]  hover:text-[#79e3ff]">Contact info</p>
        <p className=" text-[20px]  text-[#ffffff] "> ipsum dolor sit amet, consectetur adipiscing elit. ligula nulla  tincidunt id <br />faucibus sed suscipit feugiat.</p>

        <div className="w-full max-w-md p-6 bg-[#e093ff00] rounded-lg  max-auto ">
        <img className=" w-[90px] my-[20px] " src={Email}/>       
        <img className=" w-[90px] " src={Mobile}/>
        <img className=" w-[90px] my-[20px]" src={Location}/>
        </div>
        
        <div className="w-full max-w-md ml-[120px] -mt-[380px] p-6 bg-[#e093ff00] rounded-lg ">
        <p className=" text-[25px] font-semibold text-[#ffffff]   hover:text-[#79e3ff]">Email</p>
        <p className=" text-[#ffffff] leading-relaxed mb-8" >uhashankavi@gmail.com</p>

        <p className="text-[25px] font-semibold text-[#ffffff]   hover:text-[#79e3ff]">Phone</p>
        <p className=" text-[#ffffff] leading-relaxed mb-8" >+ 94 77 565 5031 <br /> +94 70 181 1431</p>

        <p className="text-[25px] font-semibold text-[#ffffff]   hover:text-[#79e3ff]">Address</p>
        <p className=" text-[#ffffff] leading-relaxed" >No 300, Citrus Junction <br />Narawala, Poddala</p>
        </div>

        <div className="mb-8 ">
        <p className="text-[20px] font-semibold text-[#ffffff] mb-[15px]">Visit my social profile and get connected</p>
        <img className="hover:shadow-xl w-[70px] float-left mx-2" src={LinkD}/>   
        <img className="hover:shadow-xl w-[70px] float-left" src={Github}/>   
        <img className="hover:shadow-xl w-[70px] float-left mx-2" src={FB}/> 
        <img className="hover:shadow-xl w-[70px] float-left" src={Insta}/> 
       </div>
      </motion.div>
      
      </div>
    </div>      
    </div>
  )
}

export default Contact
