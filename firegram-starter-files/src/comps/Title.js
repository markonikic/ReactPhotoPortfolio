import React from 'react';
import { motion } from 'framer-motion';
import { GrMail, GrInstagram } from 'react-icons/gr';
import { IconContext } from 'react-icons/lib';

const Title = () => {
  return (
    <div className="title">
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >Antonio</motion.h1>
      <motion.h2
        initial={{ x: "-50vw" }}
        animate={{ x: 0 }}
      >Portfolio</motion.h2>
      <motion.p
        initial={{ x: "50vw" }}
        animate={{ x: 0 }}
      >Here are some cool pictures.</motion.p>
      <IconContext.Provider
        value={{ size: '40px', color: '#f2c4c1', className: "icon" }}
      >
        <a href="mailto:antoniorepaci16@gmail.com" id="mail"> <GrMail /></a>
        <a href="https://www.instagram.com/antoniorepaci/" target="_blank" id="instagram"><GrInstagram /></a>
      </IconContext.Provider>
    </div>
  )
}

export default Title;