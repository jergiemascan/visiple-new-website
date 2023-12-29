"use client"
import React from "react"
import ContactUsComponent from "../components/contact/contactUsComponent"
import FormComponent from "../components/accounts/formComponent"
import styles from "./page.module.css"

const Contact = () => {
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
    <div className="page-container ">
      <div className="page-inner-container ">
        <div className={styles.contactGridWrapper}>
          <ContactUsComponent />
          <FormComponent
            title=" Please fill out this form"
            buttonTitle="Send"
            fields={contactFieldItems}
            onSubmit={onSubmit}
          />
        </div>
      </div>
    </div>
  )
}

export default Contact
