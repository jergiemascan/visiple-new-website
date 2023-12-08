import React from "react"
import Link from "next/link"
import styles from "./footerComponent.module.css"

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <p>Visiple © 2023</p>
      </div>
      <ul className={styles.ul}>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </footer>
  )
}

export default FooterComponent
