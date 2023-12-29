import React from "react"
import styles from "./faqComponent.module.css"

const FaqHeaderComponent = () => {
  return (
    <div className={`scrollSnapContainer- `}>
      <div className={`scrollSnapElement- ${styles.imageWrapper}`}>
        <img
          className={styles.image}
          src="/images/faq/img-01.png"
          alt="Visiple support"
        />
        <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      </div>
    </div>
  )
}

export default FaqHeaderComponent
