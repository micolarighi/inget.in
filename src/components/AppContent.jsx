import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import '../styles/appcontent.module.css'
import { motion } from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import styles from '../styles/app.module.css';


const container = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    }, 
  },
};
const child = {
  hidden: { y: 20, opacity: 0, scale: 0.6 },
  visible: {
    transition: {
      duration: 0.4,
    },
    y: 0,
    opacity: 1,
    scale: 1.
  },
};

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList)
  const filterStatus = useSelector(state => state.todo.filterStatus)
  const sortedTodoList = [...todoList]
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time))

  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <motion.div className='lg:px-3 lg:py-4 px-2 py-3 rounded-md text-2xl text-center text-slate-800 mt-10 mb-10 container bg-blue-300' variants={container} initial='hidden' animate="visible">
      <AnimatePresence>
        {filteredTodoList && filteredTodoList.length > 0 ? (
          filteredTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        ) : <motion.p variants={child} className={styles.emptyText}>
          Oops! There is no <strong className='text-green-500'>Mido</strong> found, trying add one?
        </motion.p>}
      </AnimatePresence>
    </motion.div>
  )
}

export default AppContent