import React from 'react';
import Image from 'next/image';
import { motion } from "motion/react"
import { assets } from '@/assets/assets';
function Header() {
    return ( 
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center gap-4 justify-center'>
            <motion.div 
             initial={{ scale:0 }}
             whileInView={{ scale:1 ,delay:0.8 }}
             transition={{duration:0.8,type:'spring',stiffness:90}}
             >
                <Image src={assets.profile_img} alt='' className='w-32 rounded-full' />
            </motion.div>
                <motion.h3 initial={{ y:-15, opacity:0 }}
                whileInView={{ y:0,opacity:1 }}  className='flex gap-2 text-2xl mb-3 font-Ovo' >Hi, I am Aaditya <Image className='w-6' src={assets.hand_icon} alt=''/></motion.h3>
                <motion.h1 initial={{ y:-10, opacity:0 }} transition={{duration:0.6,delay:0.5}}
                whileInView={{ y:0,opacity:1 }} className='text-3xl sm:text-6xl font-Ovo'>FullStack developer</motion.h1>
                <motion.p initial={{ y:-10, opacity:0 }}
                whileInView={{ y:0,opacity:1 }}>Welcome to my portfolio website! I am a dedicated computer science student specializing in full stack web development. My passion lies in building dynamic and responsive websites and web applications. Take a look around to see my skills, projects, and experiences.</motion.p>

                <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                    <motion.a initial={{ y:20, opacity:0 }}
                    whileInView={{ y:0,opacity:1 }} transition={{duration:0.6, delay:0.8}} href="#contact" className=' flex items-center bg-black rounded-full text-white px-4 py-2 gap-4 dark:bg-transparent border dark:border-gray-200'>Contact me <Image className='w-4' src={assets.right_arrow_white} alt=''/></motion.a>
                    <motion.a initial={{ y:20, opacity:0 }}
                    whileInView={{ y:0,opacity:1 }} transition={{duration:0.6, delay:0.9}} href="/sample-resume.pdf" download className='flex items-center px-4 py-2 border rounded-full gap-4 border-gray-900 dark:text-black bg-white'>Resume<Image className='w-4' src={assets.download_icon} alt=''/></motion.a>

                </div>
        </div>
     );
}

export default Header