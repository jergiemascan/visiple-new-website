import React from "react"
import styles from "./buttonLink.module.css"

const ButtonPrice = ({ children }) => {
  return (
    <button className={styles.priceButton}>
      <span>{children}</span>
    </button>
  )
}

export default ButtonPrice
