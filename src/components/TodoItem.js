import React, { useState } from 'react'
import styles from '../styles/todoItem.module.css'
import { getClasses } from '../utils/getClasses'
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faSquarePen } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../slices/todoSlice'
import toast from 'react-hot-toast'
import TodoModal from './TodoModal'

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id))
    toast.success('Mido Deleted Successfully!')
  }

  const handleUpdate = () => {
    setUpdateModalOpen(true)
  }
  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          [ ]
          <div className={styles.texts}>
            <p className={getClasses([styles.todoText, todo.status === 'complete' && styles['todoText--completed']])}>{todo.title}</p>
            <p className={styles.time}>{format(new Date(todo.time), 'p, MM/dd/yyyy')}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div className={styles.icon} onClick={handleDelete} role="button" tabIndex={0} onKeyDown={handleDelete}>
            <FontAwesomeIcon icon={faTrash} />
          </div>
          <div className={styles.icon} onClick={handleUpdate} role="button" tabIndex={0} onKeyDown={handleUpdate}>
            <FontAwesomeIcon icon={faSquarePen} />

          </div>
        </div>
      </div>
      <TodoModal type="update" todo={todo} modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} />
    </>
  )
}

export default TodoItem 