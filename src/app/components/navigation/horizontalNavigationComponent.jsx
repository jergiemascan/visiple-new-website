import React from "react"
import Link from "next/link"
import styles from "./horizontalNavigationComponent.module.css"

const HorizontalNavigationComponent = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li>
          <Link href="/products">Products</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default HorizontalNavigationComponent
