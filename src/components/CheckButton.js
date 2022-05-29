import React from 'react'
import styles from '../styles/todoItem.module.css'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const checkVariants = {
  initial: {
    color: '#fff',
  },
  checked: {
    pathLength: 1,
  },
  unchecked: {
    pathLength: 0,
  }
}

const boxVariants = {
  checked: {
    backgroundColor: '#a855f7',
    transition: { duration: 0.2 }
  },
  unchecked: {
    backgroundColor: '#e6e6e6',
    transition: { duration: 0.2 }
  }
}

function CheckButton({ checked, handleCheck }) {
  const pathLength = useMotionValue(0)
  const opacity = useTransform(pathLength, [0.5, 0.15], [0, 1])
  return (
    <motion.div className={styles.svgBox}
      variants={boxVariants}
      onClick={() => handleCheck()}
      animate={checked ? 'checked' : 'unchecked'}>
      <motion.svg className={styles.svg} viewBox="0 0 53 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={checkVariants}
          styles={{ pathLength, opacity }}
          animate={checked ? 'checked' : 'unchecked'}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        ></motion.path>
      </motion.svg>
    </motion.div>
  )
}

export default CheckButton