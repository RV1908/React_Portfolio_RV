import React from 'react'
import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiBootstrapLine } from "react-icons/ri";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandVite } from "react-icons/tb";
import { animate, motion } from 'framer-motion'

const iconVariants = (duration) =>({
  initial: {y:-10},
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="p-4 flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line style={{ color: "#E34F26" }} className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line style={{ color: "#1572B6" }} className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine style={{ color: "#F7DF1E" }} className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiBootstrapLine style={{ color: "#7952B3" }} className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine style={{ color: "#61DAFB" }} className="text-7xl" />
        </motion.div>
        
      </motion.div>  
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1.5}} className="p-4 flex flex-wrap items-center justify-center gap-4">
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine style={{ color: "#06B6D4" }} className="text-7xl" />
        </motion.div>
        
        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandVite className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <GrMysql style={{ color: "#4479A1" }} className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(6.5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaGitAlt style={{ color: "#F05032" }} className="text-7xl" />
        </motion.div>
        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandFramerMotion className="text-7xl" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
