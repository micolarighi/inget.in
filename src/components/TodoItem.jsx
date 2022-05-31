import React, { useState, useEffect } from 'react'
import styles from '../styles/todoItem.module.css'
import { getClasses } from '../utils/getClasses'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo, updateTodo } from '../slices/todoSlice'
import toast from 'react-hot-toast'
import TodoModal from './TodoModal'
import CheckButton from './CheckButton'
import { motion } from 'framer-motion'

const child = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
    toast.success('Mido Deleted Successfully!')
  }

  const handleUpdate = () => {
    setUpdateModalOpen(true)
  }

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(updateTodo({ ...todo, status: checked ? 'incomplete' : 'complete' }));
  }
  return (
    <>
      <motion.div className={styles.item} variants={child}>
        <div className={styles.todoDetails}>
          <CheckButton checked={checked} handleCheck={handleCheck} />
          <div className={styles.texts}>
            <p className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--completed']])}>{todo.title}</p>
            <p className={styles.time}>{todo.time}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div className={styles.iconDelete} onClick={handleDelete} role="button" tabIndex={0} onKeyDown={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
          <div className={styles.iconEdit} onClick={handleUpdate} role="button" tabIndex={0} onKeyDown={handleUpdate}>
            <FontAwesomeIcon icon={faSquarePen} />

          </div>
        </div>
      </motion.div>
      <TodoModal type="update" todo={todo} modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} />
    </>
  )
}

export default TodoItem 