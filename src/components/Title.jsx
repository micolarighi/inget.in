import React from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/title.module.css'


function Header() {
  return (
    <motion.div animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }} className='flex justify-center items-center'>
      <div>
        <h1 id={styles.fontBitter} className='lg:text-7xl text-5xl  font-bold mt-4 text-slate-800'>Inget.in</h1>
        <p className='lg:text-lg text-sm mt-2'>List What You Do and be <span className='font-bold'> Productive</span></p>
      </div>
    </motion.div>
  )
}

export default Header