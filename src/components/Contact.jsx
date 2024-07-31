import React from 'react'
import { CONTACT } from "../constants"
import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:0.5}}
      className="my-10 text-center text-4xl">Get in Touch  
      </motion.h1>

      <motion.form 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:100}}
      transition={{duration:1}}
      class="max-w-sm mx-auto">
        <label for="message" class="tracking-tighter block mb-2">Your message</label>
        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
      </motion.form>

      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.address}</motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
        className="my-4">{CONTACT.phoneNo}</motion.p>
        <p className="my-4">
          {CONTACT.email}
        </p>
        
        

      </div>
    </div>
  )
}

export default Contact
