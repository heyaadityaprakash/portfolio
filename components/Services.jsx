import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import {motion} from "motion/react"
function Services() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
      id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4 initial={{y:-15,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.5,delay:0.5}} className="text-center mb-2 text-2xl font-semibold font-Ovo">
        My Services
      </motion.h4>

      <motion.p 
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.8}}
      className="text-center mt-5 mb-12 font-Ovo max-w-2xl mx-auto">
        specializing in the MERN stack, I excel in crafting dynamic and responsive web applications. With a keen eye for UI/UX design using Figma, I create visually appealing and user-friendly interfaces.
        .Whether you need a scalable web solution or design consultation, I'm here to transform your ideas into reality.
      </motion.p>

      <div className="flex justify-center">
      <motion.ul
      initial={{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.6,delay:0.8}}
       className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10 my-10">
        {serviceData.map(({ icon, title, description,link }, index) => (
          <motion.li
          
        whileInView={{scale:1.05}}
        
            className="border-[0.5px] border-gray-800 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1 hover:scale-105 duration-500 dark:hover:bg-darkHover"
            key={index}
          >
            <Image className="w-12 mt-3" src={icon} alt={title} />
            <h3 className=" text-lg my-4 font-semibold text-gray-800 dark:text-gray-50">{title}</h3>
            <p className="text-sm leading-4 dark:text-gray-80">{description}</p>
            <a className="flex gap-2 items-center mt-5" href={link}>Learn more <Image className="w-4" src={assets.right_arrow} alt=""/></a>
          </motion.li>
        ))}
      </motion.ul>
      </div>

    </motion.div>
  );
}

export default Services;
