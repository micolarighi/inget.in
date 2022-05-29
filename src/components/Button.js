import React, { Children } from 'react'
import styles from '../styles/button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

function Button({ children, type, ...rest }) {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} class="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg shadow-purple-500/50 font-medium rounded-md text-sm px-5 py-4 text-center duration-300 ease-in-out hover:opacity-80 mr-4" {...rest}>{children}</button>
  )
}

function SelectButton({ children, ...rest }) {
  return (
    <select className="px-4 hover:opacity-90 py-4 text-sm shadow-md shadow-gray-700 font-medium text-white bg-gray-900 rounded-lg outline-none ml-4">
      <option value="all" selected>All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </select>
  )
}
export { SelectButton }
export default Button