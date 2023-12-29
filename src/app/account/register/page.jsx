"use client"
import React from "react"
import FormComponent from "../../components/accounts/formComponent"
import { registrationFieldItems } from "../../components/utilities/registrationFieldItems"

const Register = () => {
  const onSubmit = data => {
    /* Handle registration submission */
  }
  return (
    <div className="page-container ">
      <div className="page-inner-container ">
        <FormComponent
          title="Create Account"
          buttonTitle="Register"
          fields={registrationFieldItems}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default Register
