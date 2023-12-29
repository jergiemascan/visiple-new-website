import React from "react"
import styles from "./heroComponent.module.css"
import Image from "next/image"

const HeroComponent = ({ children, src, alt, priority, className }) => {
  return (
    <div className={` ${styles.hero} ${className}`}>
      <img className={` ${styles.image} ${className}`} src={src} alt={alt} />
      <div className={styles.heroContentWrapper}>{children}</div>
    </div>
  )
}

export default HeroComponent
