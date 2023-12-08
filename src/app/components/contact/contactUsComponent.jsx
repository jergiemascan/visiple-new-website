"use client"
import React from "react"
import FormComponent from "../accounts/formComponent"
import styles from "./contactUsComponent.module.css"
import Image from "next/image"

const ContactUsComponent = () => {
  const contactFieldItems = [
    {
      type: "email",
      id: "email",
      name: "email",
      label: "Email",
      placeholder: "Email",
    },
    {
      type: "text",
      id: "name",
      name: "name",
      label: "Name",
      placeholder: "Name",
    },
    {
      type: "textarea",
      id: "message",
      name: "message",
      label: "Message",
      placeholder: "Message",
    },
  ]
  const onSubmit = data => {
    /* Handle registration submission */
  }
  return (
    <section className={styles.contactContainer}>
      <h1 className={styles.title}>CONTACT US</h1>
      <div className={styles.contactGridWrapper}>
        <div className={styles.addressWrapper}>
          <div className={styles.contactInfo}>
            <h2>Visiple HQ</h2>
            <div>
              <span>Telephone</span>
              <p>+1860 333 9167</p>
            </div>
            <p>
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
            </p>
            <div>
              <span>Address</span>
              <p>77 - 79 Green Street</p>
              <p>
                New London,
                <br />
                CT 06320, USA
              </p>
            </div>

            <div>
              <Image
                className={styles.image}
                src="/images/locations.png"
                alt="Visiple location map"
                width="350"
                height="250"
                priority
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
          </div>
        </div>

        <FormComponent
          title=" Please fill out this form"
          buttonTitle="Send"
          fields={contactFieldItems}
          onSubmit={onSubmit}
        />
      </div>
    </section>
  )
}

export default ContactUsComponent
