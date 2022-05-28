import React from 'react'
import { useState } from 'react'
import Button from './Button'
import { SelectButton } from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import TodoModal from './TodoModal'

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div className='lg:ml-20 md:ml-4 ml-0 pt-10 mb-3'>

      <div className='flex items-center '>
        <Button type={'button'} onClick={() => setModalOpen(true)}>ADD TASK
          <FontAwesomeIcon className='text-xl items-center pl-3' icon={faCirclePlus} />
        </Button>
        <SelectButton>Completed</SelectButton>
        <TodoModal type="add" modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  )
}

export default AppHeader