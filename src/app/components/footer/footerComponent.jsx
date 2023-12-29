import React from "react"
import Link from "next/link"
import styles from "./footerComponent.module.css"

const FooterComponent = ({ className }) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className={`${styles.footer} ${className}`}>
      <ul>
        <li>
          <Link href="/about-us">Visiple © {currentYear}</Link>
        </li>
        <li>
          <Link href="/about-us">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
        <li>
          <Link href="/costumer-service/faq">FAQ</Link>
        </li>
      </ul>
    </footer>
  )
}

export default FooterComponent
