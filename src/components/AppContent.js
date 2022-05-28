import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function AppContent() {
  const todoList = useSelector(state => state.todo.todoList)
  const sortedTodoList = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time))
  return (
    <div className='text-2xl text-center text-slate-800 mt-10 mb-10'>
      {sortedTodoList && sortedTodoList.length > 0 ? (
        sortedTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : <h2>Oops! There is no <strong className='text-purple-500'>Mido</strong>  found, trying to add one?</h2>}
    </div>
  )
}

export default AppContent