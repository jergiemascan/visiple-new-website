import React from "react"
import ButtonPrice from "../components/button/buttonPrice"
import ButtonLink from "../components/button/buttonLink"
import styles from "./test.module.css"
import ButtonAccounts from "../components/button/buttonAccounts/buttonAccounts"

const Test = () => {
  return (
    <section className={`flex-column container ${styles.bg}`}>
      <h1>TYPOGRAPHY</h1>
      <div className={`flex-column`}>
        <span> Source Sans 3 </span>
        <p className={styles.sansP}>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal.
        </p>
        <p className={styles.p}>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal.
        </p>
        <h1 className={`${styles.sourceSans} fw100`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSans} fw300`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSans} fw500`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSans} fw700`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSans} fw800`}>
          Whereas recognition of the inherent dignity
        </h1>
      </div>
      <div className={`flex-column`}>
        <span> Source-serif </span>
        <p className={styles.sourceserifP}>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal.
        </p>
        <p className={styles.p}>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal.
        </p>
        <h1 className={`${styles.sourceSerif} fw100`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSerif} fw300`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSerif} fw500`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSerif} fw700`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.sourceSerif} fw800`}>
          Whereas recognition of the inherent dignity
        </h1>
      </div>
      <div className={`flex-column`}>
        <span>Nunito</span>
        <p className={styles.nunitoP}>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal.
        </p>
        <p className={styles.p}>
          No one shall be subjected to arbitrary arrest, detention or exile.
          Everyone is entitled in full equality to a fair and public hearing by
          an independent and impartial tribunal.
        </p>
        <h1 className={`${styles.nunito} fw100`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.nunito} fw300`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.nunito} fw500`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.nunito} fw700`}>
          Whereas recognition of the inherent dignity
        </h1>
        <h1 className={`${styles.nunito} fw800`}>
          Whereas recognition of the inherent dignity
        </h1>
      </div>

      <div className={`flex-column color-white `}>
        <span className="color-primary ">Primary colors</span>
        <div className={`div bg-black200`}>#171a20</div>
        <div className={`color-primary div bg-gray`}>#f4f4f4</div>
        <div className={`div bg-green`}>#55c57a</div>
        <div className={`div bg-green300`}> #10ac84</div>
        <div className={`div bg-green400`}> #16a085</div>
        <span className="color-primary ">Extra colors</span>
        <div className={`div bg-blue100`}></div>
        <div className={`div bg-blue200`}></div>
      </div>

      <div className={`flex-column`}>
        <h1>BUTTONS</h1>

        <div
          className={`flex-column padding-2 align-center  width100 ${styles.buttons}`}
        >
          <div className={`flex-column width100 ${styles.buttonsContainer}`}>
            <span>Price Holder in Products</span>
            <ButtonPrice>$14.99/month</ButtonPrice>

            <ButtonLink href={""} className={styles.homepageButtonWhite}>
              White
            </ButtonLink>
            <ButtonLink href={""} className={styles.heroButton}>
              Transparent-02
            </ButtonLink>
            <ButtonLink href={""} className={styles.homepageButtonTransparent}>
              Transparent
            </ButtonLink>

            <span>Login in Horizontal Nav</span>
            <ButtonLink href={""} className={styles.loginButton}>
              Login
            </ButtonLink>
          </div>

          <div className={`flex-column width100 ${styles.buttonsContainer}`}>
            <ButtonAccounts className={`${styles.button}`} type="submit">
              Sign in
            </ButtonAccounts>
            <ButtonAccounts className={styles.button} type="submit">
              Register
            </ButtonAccounts>

            <span>Extra Buttons</span>
            <ButtonLink href={""} className={styles.buttonBlue} type="submit">
              Blue-100
            </ButtonLink>
            <ButtonLink
              href={""}
              className={styles.buttonBlue200}
              type="submit"
            >
              Blue-200
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test
