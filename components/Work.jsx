import { workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Link from "next/link";
function Work({ darkMode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 "
    >
      <motion.h4
        initial={{ y: -15, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-2xl font-semibold font-Ovo"
      >
        My Work
      </motion.h4>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-center mt-5 mb-12 font-Ovo max-w-2xl mx-auto"
      >
        These are some of my works showcasing my skills.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 sm:gap-8 my-10"
      >
        {workData.map(({ title, description, bgImage, link }, index) => (
          <Link href={link} target="blank" key={index}>
            <motion.li
              whileInView={{ scale: 1.05 }}
              className="aspect-square bg-no-repeat bg-cover border-[0.5px] border-gray-800 rounded-xl cursor-pointer p-6 relative hover:-translate-y-1 hover:scale-105 duration-500"
              style={{
                backgroundImage: `url(${bgImage})`,
                backgroundPosition: "center",
              }}
            >
              <div className="bg-gradient-to-b from-transparent to-black/90 rounded-md absolute bottom-0 left-1/2 -translate-x-1/2 w-full py-3 px-5 flex items-center justify-between opacity-70 hover:opacity-100 duration-500">
                <div>
                  <h3 className="font-semibold text-white">{title}</h3>
                  <p className="text-sm text-gray-200">{description}</p>
                </div>
              </div>
            </motion.li>
          </Link>
        ))}
      </motion.ul>

      <a target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700  border-gray-700 rounded-full border-[0.5px] px-10 mx-auto py-3 my-20 hover:bg-lightHover duration-500 dark:text-gray-50 dark:border-gray-50 dark:hover:bg-darkHover"
        href="https://github.com/heyaadityaprakash?tab=repositories"
      >
        Show more
        <Image
          className="w-4"
          src={
            darkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
        />
      </a>
    </motion.div>
  );
}

export default Work;
