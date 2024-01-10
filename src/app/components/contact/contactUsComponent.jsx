"use client"
import React from "react"
import styles from "./contactUsComponent.module.css"
import { useInView } from "react-intersection-observer"

const ContactUsComponent = () => {
  const [childrenRef, childrenInView] = useInView({ triggerOnce: true })
  return (
    <section className={styles.contactContainer}>
      <div className={styles.addressWrapper}>
        <h1 className={`${styles.title}`}>Contact us</h1>
        <div
          ref={childrenRef}
          className={`${childrenInView ? "fade-in " : "not-appear-up"} ${
            styles.contactInfo
          }`}
        >
          <h2>Visiple Locations</h2>
          {/* <div>
            <span>Phone</span>
            <p>+1860 333 9167</p>
          </div> */}
          {/* <p>
            Press meetings
            <br />
            <a
              className={styles.mailto}
              href="mailto:meetings@visiple.com"
              target="_blank"
              rel="noopener"
            >
              meetings@visiple.com
            </a>
          </p> */}
          <div>
            <span>Address (US)</span>
            <p>77 - 79 Green Street</p>
            <p>
              New London,
              <br />
              CT 06320, USA
            </p>
            <div className={styles.phone}>
              <p>Phone</p>
              <p>+1860 333 9167</p>
            </div>
          </div>
          <div>
            <span>Address (EMEA)</span>
            <p>2069</p>
            <p>
              Jessheim,
              <br />
              Norway
            </p>
          </div>

          <div className={styles.imageWrapper}>
            <img
              src="/images/contact/image1.jpg"
              alt="Visiple location map"
              style={{
                width: "100%",
                height: "auto",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />{" "}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactUsComponent
