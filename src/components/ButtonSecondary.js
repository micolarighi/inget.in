import React, { Children } from 'react'
import styles from '../styles/button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

function ButtonSecondary({ children, type, ...rest }) {
  return (
    <button type={type === 'submit' ? 'submit' : 'button'} class="text-purple-800 bg-purple-200  focus:ring-4 focus:outline-none focus:ring-purple-300 shadow-lg font-medium rounded-md text-sm px-5 py-4 text-center duration-300 ease-in-out hover:opacity-80" {...rest}>{children}</button>
  )
}

function SelectButton({ children, ...rest }) {
  return (
    <select className="px-4 py-4 text-sm shadow-md shadow-gray-700 font-medium text-white bg-gray-900 rounded-lg outline-none">
      <option value="all" selected>All</option>
      <option value="incomplete">Incomplete</option>
      <option value="complete">Complete</option>
    </select>
  )
}
export { SelectButton }
export default ButtonSecondary