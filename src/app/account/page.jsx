import React from "react"
import Login from "./login/page"
import ButtonLink from "../components/button/buttonLink"
import styles from "./account.module.css"

const Account = () => {
  return (
    <section className={styles.accountContainer}>
      <Login />
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
    </section>
  )
}

export default Account
