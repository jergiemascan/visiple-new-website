import React from "react"
import styles from "./buttonLink.module.css"
import Link from "next/link"

const ButtonLink= ({ className, children, href, ...props }) => {
  return (
    <Link href={href} className={`${styles.button} ${className}`} {...props}>
      <span>{children}</span>
    </Link>
  )
}

export default ButtonLink
