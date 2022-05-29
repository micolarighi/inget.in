import React from 'react'
import { motion } from 'framer-motion'

function Header() {
  return (
    <motion.div animate={{ scale: [0.8, 1] }} transition={{ duration: 0.5 }} className='flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='lg:text-7xl text-5xl  font-bold mt-4 text-slate-800'>MiDo List</h1>
        <p className='lg:text-lg text-sm'>List What You Do and be <span className='font-bold'> Productive</span></p>
      </div>
    </motion.div>
  )
}

export default Header