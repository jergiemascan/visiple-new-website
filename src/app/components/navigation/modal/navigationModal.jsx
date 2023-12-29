import React from "react"
import styles from "./navigationModal.module.css"

const NavigationModal = ({ item }) => {
  return (
    <dialog className={styles.dialog} open={!!item}>
      {item === "products" && (
        <div className={styles.backdrop}>
          <div>prod 1</div>
          <div>product 2</div>
          <div>product 3</div>
        </div>
      )}
      {item === "about" && (
        <div className={styles.backdrop}>
          <div>about</div>
          <div>about</div>
          <div>about</div>
        </div>
      )}
      {item === "blog" && (
        <div className={styles.backdrop}>
          <div>Blog</div>
          <div>Blog</div>
        </div>
      )}
    </dialog>
  )
}

export default NavigationModal
