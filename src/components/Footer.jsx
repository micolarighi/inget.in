import React from 'react'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import '../logo512.png'


function Footer() {
  return (
    <div>
      <p className={styles.footerDiv}>
        {/* <img width="30" className='mr-3' src='logo512.png'></img> */}
        Made with
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        by
        <strong className='ml-1 text-green-500'> Second Group</strong>
      </p>
    </div>
  )
}

export default Footer