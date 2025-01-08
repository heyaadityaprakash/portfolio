import React from 'react';
import Image from 'next/image';
import { assets, infoList, toolsData } from '@/assets/assets';
import { motion } from "motion/react"

function About({darkMode}) {
    return ( 
        <motion.div
        initial={{opacity:0 ,y:-15}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1}}
        
         id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1}}
         className='text-center mb-2 text-2xl font-semibold font-Ovo'>About Me</motion.h4>
            
            <motion.div initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1,delay:0.5}} className='flex w-full flex-col lg:flex-row items-center gap-20 my-12'>
                <motion.div initial={{opacity:0,scale:0.8}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:0.5}} className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image className='w-full rounded-md' src={assets.user_image} alt='userimg'/>
                </motion.div>
                <motion.div initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6,delay:0.8}} className='flex-1'>
                    <p className='mb-10 font-Ovo max-w-2xl'>I am a computer science student with a deep enthusiasm for full stack web development. My expertise lies in the MERN stack, which enables me to create dynamic and responsive web applications. Additionally, I possess a strong understanding of Figma and UI/UX design, allowing me to craft visually appealing and user-friendly interfaces. Proficient in Java, I continuously work on solving DSA problems to enhance my problem-solving abilities.</p>

                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon,iconDark,title,description},index)=>(
                            <motion.li whileInView={{scale:1.05}} className='border-[0.5px] border-gray-800 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1 hover:scale-105 duration-500 hover:shadow-black dark:border-white dark:hover:bg-darkHover' key={index}>
                                <Image className='w-6 mt-3' src={darkMode?iconDark : icon} alt={title}/>
                                <h3 className='my-4 font-semibold text-gray-800 dark:text-gray-50'>{title}</h3>
                                <p className='text-sm'>{description}</p>
                            </motion.li>
                        ))}
                    </ul>


                    <h4 className='my-6 text-xl font-Ovo'>My Tech Stack</h4>
                    <motion.ul initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.8,delay:1}}className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool,index)=>(
                            <motion.li whileInView={{scale:1.05}} className='border border-gray-600 w-12 s,:w-14 flex items-center justify-center aspect-square rounded-lg hover:-translate-y-1 hover:scale-105 duration-500 ' key={index}>
                                <Image className='w-5 sm:w-7' src={tool} alt='tool'/>
                            </motion.li>

                        ))}
                    </motion.ul>

                </motion.div>

            </motion.div>
        </motion.div>
     );
}

export default About;