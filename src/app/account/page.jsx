import React from "react"
import Login from "./login/page"
import ButtonLink from "../components/button/buttonLink"
import styles from "./account.module.css"

const Account = () => {
  return (
    <>
      <Login />
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

export default Account
