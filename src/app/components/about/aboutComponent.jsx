import React from "react"
import styles from "./aboutComponent.module.css"
import Image from "next/image"

const AboutComponent = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div>
        <Image
          className={styles.image}
          src="/images/logo2.png"
          alt="Visiple logo"
          priority
          width="50"
          height="50"
        />
      </div>
      <h1>About Visiple</h1>
      <div className={styles.aboutTextWrapper}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo
          beatae possimus magnam asperiores temporibus debitis animi velit,
          illum, consequuntur eius dolor praesentium, harum saepe non
          aspernatur. Placeat recusandae voluptatum, est nam ratione totam
          laudantium dignissimos fugiat ullam aspernatur quas quisquam ipsum
          impedit! Porro aspernatur doloribus commodi corrupti vitae, nulla
          maiores odio itaque ratione repellat totam rerum, eveniet nihil
          architecto quasi consectetur nisi quibusdam ut! Totam aliquid placeat
          accusamus. Officiis perferendis doloremque ratione obcaecati
          consequatur dolores inventore, cupiditate tempora optio itaque eos.
        </p>
      </div>
    </div>
  )
}

export default AboutComponent
