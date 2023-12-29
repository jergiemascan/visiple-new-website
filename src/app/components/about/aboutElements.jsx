"use client"
import React from "react"
import Image from "next/image"
import styles from "./aboutComponent.module.css"
import { useInView } from "react-intersection-observer"

export const AboutHeading = () => {
  const [titleRef, titleInView] = useInView({ triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true })

  return (
    <div className={styles.topHeading}>
      <Image
        className={styles.logo}
        src="/images/logo2.png"
        alt="Visiple logo"
        priority
        width="50"
        height="50"
      />
      <h1
        ref={titleRef}
        className={titleInView ? "fade-in" : "not-appear-down"}
      >
        About Visiple
      </h1>
      <div
        ref={aboutRef}
        className={`${styles.headingText}
          ${aboutInView ? "fade-in " : "not-appear-up"}`}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo
          beatae possimus magnam asperiores temporibus debitis animi velit,
          illum, consequuntur eius dolor praesentium, harum saepe non
          aspernatur.
        </p>
      </div>
    </div>
  )
}

export const AboutItem = ({ about, className }) => {
  const [ref, inView] = useInView({ triggerOnce: true })

  return (
    <div ref={ref} className={`${styles.gridContent} ${className}`}>
      <div className={styles.blockContent}>
        <h2 className={inView ? "fade-inTitle" : "not-appear-down"}>
          {about.title}
        </h2>
        <p className={inView ? "fade-inTitle" : "not-appear-up"}>
          {about.message}
        </p>
      </div>

      <div className={inView ? "fade-inImage" : "not-appear-side"}>
        <img className={styles.image} src={about?.src} alt={about?.alt} />
      </div>
    </div>
  )
}
