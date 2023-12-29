"use client"
import React, { useState } from "react"
import Link from "next/link"
import styles from "./horizontalNavigationComponent.module.css"
import NavigationModal from "./modal/navigationModal"

const HorizontalNavigationComponent = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li
          // onMouseEnter={() => setHoveredItem("products")}
          // onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/products">Products</Link>
          </li>
          <li
          // onMouseEnter={() => setHoveredItem("about")}
          // onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <li
          // onMouseEnter={() => setHoveredItem("blog")}
          // onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/blog">Blog</Link>
          </li>
          <li
          // onMouseEnter={() => setHoveredItem("blog")}
          // onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href="/test">[Test]</Link>
          </li>
        </ul>
        {/* {hoveredItem && <NavigationModal item={hoveredItem} />} */}
      </nav>
    </>
  )
}

export default HorizontalNavigationComponent
