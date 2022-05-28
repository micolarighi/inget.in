import React from 'react'
import styles from '../styles/footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


function Footer() {
  return (
    <div>
      <p className={styles.footerDiv}>
        Made with
        <FontAwesomeIcon icon={faHeart} className={styles.icon} />
        by Micola Arighi Dwitya
      </p>
    </div>
  )
}

export default Footer