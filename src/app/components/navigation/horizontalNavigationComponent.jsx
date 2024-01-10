"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./horizontalNavigationComponent.module.css"
import { HorizontalNavigationList } from "../utilities/horizontalNavigationList"

const HorizontalNavigationComponent = () => {
  const pathname = usePathname()

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {HorizontalNavigationList.map((link, index) => {
            const isActive = pathname.startsWith(link.href)
            return (
              <li key={index}>
                <Link href={link.href} className={isActive ? "activeLink" : ""}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default HorizontalNavigationComponent
