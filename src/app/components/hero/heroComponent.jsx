import React from "react"
import styles from "./heroComponent.module.css"
import Image from "next/image"

const HeroComponent = ({ children, src, alt, priority, className }) => {
  return (
    <div className={styles.hero}>
      <Image
        className={className}
        src={src}
        alt={alt}
        fill
        priority={priority}
        style={{ objectFit: "cover", objectPosition: "center" }}
      />
      <div className={styles.heroContentWrapper}>{children}</div>
    </div>
  )
}

export default HeroComponent
