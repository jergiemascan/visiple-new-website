"use client"
import React from "react"
import FormComponent from "../../components/accounts/formComponent"
import { registrationFieldItems } from "../../components/utilities/registrationFieldItems"

const Register = () => {
  const onSubmit = data => {
    /* Handle registration submission */
  }
  return (
    <FormComponent
      title="Create Account"
      buttonTitle="Register"
      fields={registrationFieldItems}
      onSubmit={onSubmit}
    />
  )
}

export default Register
