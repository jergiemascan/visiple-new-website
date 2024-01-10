import React from "react"
import styles from "../account.module.css"
import ButtonLink from "@/app/components/button/buttonLink"
import SigninComponent from "@/app/components/accounts/signin/signinComponent"

const Signin = () => {
  return (
    <>
      <SigninComponent />
      <div className="page-container ">
        <span className={styles.span}>
          <hr />
          Or
          <hr />
        </span>
        <div className={styles.buttonWrapper}>
          <ButtonLink href="/account/register" className={styles.button}>
            Create Account
          </ButtonLink>
        </div>
      </div>
    </>
  )
}

export default Signin
