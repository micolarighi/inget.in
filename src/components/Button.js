import React, { Children } from 'react'
import styles from '../styles/button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'
import { getClasses } from '../utils/getClasses';

function Button({ children, type, ...rest }) {
  return (
    <button className="text-white bg-gradient-to-r from-purple-400 via-purple-500 to-purple-500 hover:bg-gradient-to-br shadow-md shadow-purple-500/50 font-medium rounded-md text-sm px-3 pt-4 pb-5 text-center duration-300 ease-in-out hover:opacity-80 mr-4 outline-none" {...rest}>{children}</button>
  )
}

function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select, "px-3 py-4 rounded-md bg-slate-900 text-white"])}
      {...rest}
    >
      {children}
    </select>
  );
}
export { SelectButton }
export default Button