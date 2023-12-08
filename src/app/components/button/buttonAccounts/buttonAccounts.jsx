import React from "react"
import styles from "./buttonAccounts.module.css"

const ButtonAccounts = ({ onClick, type, children, testId, className }) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type={type}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
  )
}

export default ButtonAccounts
