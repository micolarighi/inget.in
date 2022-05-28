import React from 'react'

function Header() {
  return (
    <div className='flex justify-center items-center'>
      <div className='text-center'>
        <h1 className='text-7xl font-bold mt-4 text-slate-800'>MiDo List</h1>
        <p>A Simple Todo List App created by <span className='font-bold'>Micola Arighi</span></p>
      </div>
    </div>
  )
}

export default Header