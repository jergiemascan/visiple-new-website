import React from "react"
import ButtonLink from "./components/button/buttonLink"
import styles from "./page.module.css"
import { HeroImageList } from "./components/utilities/heroImageList"
import HeroComponent from "./components/hero/heroComponent"

const Homepage = () => {
  return (
    <>
      {HeroImageList.map((imgBlock, index) => (
        <HeroComponent
          key={index}
          src={imgBlock.src}
          alt={imgBlock.alt}
          priority={index === 0}
          style={{ objectFit: "cover", objectPosition: "center" }}
        >
          <h1>{imgBlock.title}</h1>
          <div className={styles.heroButtonsContainer}>
            {imgBlock.buttons.map((button, index) => (
              <ButtonLink
                className={`${
                  index === 0
                    ? styles.homepageButtonWhite
                    : styles.homepageButtonTransparent
                }`}
                key={index}
                href={button.href}
              >
                {button.text}
              </ButtonLink>
            ))}
          </div>
        </HeroComponent>
      ))}
    </>
  )
}

export default Homepage
