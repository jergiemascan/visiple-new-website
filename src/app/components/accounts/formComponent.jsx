"use client"
import React, { useState } from "react"
import { useForm } from "react-hook-form"
import styles from "./formComponent.module.css"
import ButtonAccounts from "../button/buttonAccounts/buttonAccounts"
import CountrySelectorComponent from "./countrySelectorComponent"
import { useInView } from "react-intersection-observer"

const FormComponent = ({ title, buttonTitle, fields, onSubmit }) => {
  const { register, handleSubmit, errors } = useForm()
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [childrenRef, childrenInView] = useInView({ triggerOnce: true })

  const formFields = field => {
    switch (field.type) {
      case "text":
      case "email":
      case "password":
        return (
          <div className={`flex-column ${styles.formGroup}`}>
            <label htmlFor={field.id}>{field.label}</label>
            <input
              // ref={register}
              type={field.type}
              id={field.id}
              placeholder={field.placeholder}
            />
          </div>
        )

      case "countrySelector":
        return (
          <div className={`flex-column ${styles.formGroup}`}>
            <label htmlFor={field.id}>{field.label}</label>
            <CountrySelectorComponent
              value={selectedCountry}
              onChange={setSelectedCountry}
            />
          </div>
        )
      case "checkbox":
        return (
          <div className={`flex-row ${styles.formGroup}`}>
            <input
              // ref={register}
              type="checkbox"
              id={field.id}
              name={field.name}
            />
            <label htmlFor={field.id}>{field.label}</label>
            <p>Terms and Conditions here</p>
          </div>
        )
      case "textarea":
        return (
          <div className={`flex-column ${styles.formGroup}`}>
            <label htmlFor={field.id}>{field.label}</label>
            <textarea
              // ref={register}
              type="textarea"
              id={field.id}
              name={field.name}
              required
              maxLength="500"
              placeholder="Please write some message..."
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section
      ref={childrenRef}
      className={`${childrenInView ? "fade-in " : "not-appear-up"} ${
        styles.formContainer
      }`}
    >
      <div className={styles.formWrapper}>
        <h1>{title}</h1>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          {fields.map(field => formFields(field))}
          <div className={styles.buttonWrapper}>
            <ButtonAccounts className={styles.button} type="submit">
              {buttonTitle}
            </ButtonAccounts>
          </div>
        </form>
      </div>
    </section>
  )
}

export default FormComponent
