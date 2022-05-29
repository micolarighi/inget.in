import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { SelectButton } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import TodoModal from './TodoModal'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { updateFilterStatus } from '../slices/todoSlice';



function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)
  const initialFilterStatus = useSelector((state) => state.todo.filterStatus);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);
  const dispatch = useDispatch()

  const updateFilter = (e) => {
    setFilterStatus(e.target.value);
    dispatch(updateFilterStatus(e.target.value));
  };
  return (
    <div className='lg:ml-20 md:ml-4 ml-0 pt-10 mb-3'>
      <div className='flex items-center '>
        <Button type={'button'} onClick={() => setModalOpen(true)}>ADD TASK
          <FontAwesomeIcon className='text-xs pl-1  lg:text-xl items-center' icon={faCirclePlus} />
        </Button>
        <SelectButton
          id="status"
          onChange={(e) => updateFilter(e)}
          value={filterStatus}
        >
          <option value="all">All</option>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Completed</option>
        </SelectButton>

        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  )
}

export default AppHeader