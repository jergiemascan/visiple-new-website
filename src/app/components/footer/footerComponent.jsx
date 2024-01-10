import React from "react"
import Link from "next/link"
import styles from "./footerComponent.module.css"
import { FooterList } from "../utilities/footerList"

const FooterComponent = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className}`}>
      <ul>
        {FooterList.map((list, index) => (
          <li key={index}>
            <Link href={list.href}>{list.name}</Link>
          </li>
        ))}
      </ul>
    </footer>
  )
}

export default FooterComponent
