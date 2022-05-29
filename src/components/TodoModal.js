import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import styles from '../styles/modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons'
import { addTodo, updateTodo } from '../slices/todoSlice'
import Button from './Button'
import SecondaryButton from './ButtonSecondary'
import { v4 as uuid } from 'uuid'
import { toast } from 'react-hot-toast'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'

const dropIn = {
  hidden: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  visible: {
    transform: 'scale(1)',
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 10,
      stiffness: 100,
    },
  },
  exit: {
    transform: 'scale(0.9)',
    opacity: 0,
  },
};

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('incomplete')
  const dispatch = useDispatch();

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a Mido name');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task added successfully');
      }
      if (type === 'update') {
        if (todo.title !== title || todo.status !== status) {
          dispatch(updateTodo({ ...todo, title, status }));
          toast.success('Task Updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
      setModalOpen(false);
    }
  };
  return (
    <AnimatePresence>

      {modalOpen && (
        <motion.div className={styles.wrapper} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div className={styles.container} variants={dropIn} intial="hidden" animate="visible" exit={"exit"}>
            <motion.div className={styles.closeButton} onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)} tabIndex={0} role="button" initial={{ top: 40, opacity: 0 }} animate={{ top: -10, opacity: 1 }} exit={{ top: 40, opacity: 0 }}>
              <FontAwesomeIcon icon={faSquareXmark} className={styles.icon} />
            </motion.div>
            <form className={styles.form} onSubmit={e => handleSubmit(e)}>
              <h1 className={styles.formTitle}>{type === 'add' ? 'Add Mido' : 'Update Mido'}</h1>
              <label htmlFor='title'>Title
                <input type="text" id="title" placeholder='Mido Name..' value={title} onChange={e => setTitle(e.target.value)}  ></input>
              </label>
              <label htmlFor='status'>Status
                <select name='status' id='status' value={status} onChange={e => setStatus(e.target.value)}>
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type='submit'> {type === 'add' ? 'Add Mido' : 'Update'}</Button>
                <SecondaryButton onClick={() => setModalOpen(false)} onKeyDown={() => setModalOpen(false)}>Cancel</SecondaryButton>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default TodoModal