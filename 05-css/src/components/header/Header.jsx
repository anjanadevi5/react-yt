import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.hdr}>
        <h3>Sheryians</h3>
        <button className={styles.btn}>Login</button></div>
  )
}

export default Header