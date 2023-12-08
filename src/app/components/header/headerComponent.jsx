"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import HorizontalNavigation from "../navigation/horizontalNavigationComponent"
import styles from "./headerComponent.module.css"
import ButtonLink from "../button/buttonLink"
import VerticalNavigation from "../navigation/verticalNavigationComponent"
import useHeaderStyle from "@/app/hooks/useHeaderStyle"

const HeaderComponent = () => {
  const [expanded, setExpanded] = useState(false)
  const { headerPosition, svgFillColor } = useHeaderStyle()
  const toggleMenu = () => {
    setExpanded(prevExpanded => !prevExpanded)
    document.body.classList.toggle("noscroll")
  }

  useEffect(() => {
    return () => {
      document.body.classList.remove("noscroll")
    }
  }, [])

  return (
    <header
      className={`${styles.headerPositionFixed} ${styles[headerPosition]}`}
    >
      <div className={styles.headerContentWrapper}>
        <Link href="/" className={styles.logo}>
          <Image src="/images/logo2.png" alt="Visiple logo" fill />
        </Link>
        <HorizontalNavigation />
        <ButtonLink href="/account/login" className={styles.loginButton}>
          Login
        </ButtonLink>

        {expanded && <VerticalNavigation setExpanded={setExpanded} />}

        <svg
          onClick={toggleMenu}
          className={styles.svg}
          viewBox="0 0 130 70"
          width={expanded ? "30" : "35"}
          height={expanded ? "30" : "35"}
          fill={expanded ? "var(--gray-200)" : svgFillColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="-3"
            width="120"
            height="14"
            rx="7"
            transform={expanded ? "rotate(45,15,20)" : "rotate(0, 15, 10)"}
          />
          <rect
            y="30"
            width="120"
            height="14"
            rx="7"
            opacity={expanded ? "0" : "1"}
          />
          <rect
            y="60"
            width="120"
            height="14"
            rx="7"
            transform={expanded ? "rotate(-45,25,55)" : "rotate(0, 15, 60)"}
          />
        </svg>
      </div>
    </header>
  )
}

export default HeaderComponent
