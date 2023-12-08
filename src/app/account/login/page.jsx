"use client"

import React from "react"
import FormComponent from "../../components/accounts/formComponent"

const Login = () => {
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

    <FormComponent
      title="Sign In"
      buttonTitle="Sign In"
      fields={loginFieldItems}
      onSubmit={onSubmit}
    />
  )
}

export default Login
