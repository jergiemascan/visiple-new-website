import React from "react"
import styles from "./aboutComponent.module.css"
import { AboutList } from "../utilities/aboutList"
import { AboutHeading, AboutItem } from "./aboutElements"

const AboutComponent = () => {
  return (
    <section className={styles.aboutContainer}>
      <AboutHeading />

      <div className={styles.bodyContent}>
        {AboutList.map((about, index) => (
          <AboutItem
            key={index}
            about={about}
            className={`${index % 2 === 0 ? styles.even : styles.odd}`}
          />
        ))}

        <div className={styles.teamWrapper}>
          <h2>Visiple Team</h2>
          <div className={styles.headingText}>
            <p>
              Our international team has years of experience in
              telecommunications, video conferencing, marketing and UX, with a
              history of delivering market relevant products and partnerships
              that drive value across the board from user to meeting
              participant. From best-in-class and first of its kind video
              conferencing services in the early days of video conferencing, to
              now developing award winning solutions with Blue Ocean approaches
              have led to explosive adoption. All thanks to our dedication to
              the user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent
