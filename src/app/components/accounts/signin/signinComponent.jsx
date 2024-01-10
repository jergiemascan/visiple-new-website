"use client"

import React from "react"
import FormComponent from "../formComponent"

const SigninComponent = () => {
  const loginFieldItems = [
    {
      type: "email",
      id: "email",
      name: "email",
      label: "Email",
      placeholder: "Email",
    },
    {
      type: "text",
      id: "password",
      name: "password",
      label: "Password",
      placeholder: "Password",
    },
  ]
  const onSubmit = data => {
    /* Handle registration submission */
  }
  return (
    <div className="page-container ">
      <div className="page-inner-container ">
        <FormComponent
          title="Sign In"
          buttonTitle="Sign In"
          fields={loginFieldItems}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  )
}

export default SigninComponent
