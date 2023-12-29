"use client"
import React from "react"
import { useInView } from "react-intersection-observer"
import HeroComponent from "./heroComponent"
import ButtonLink from "../button/buttonLink"
import styles from "./heroComponent.module.css"
import FooterComponent from "../footer/footerComponent"

const Hero = ({ imgBlock, isLastHero }) => {
  const [titleRef, titleInView] = useInView({ triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true })

  return (
    <div className="relative">
      <HeroComponent
        src={imgBlock?.src}
        alt={imgBlock?.alt}
        priority={imgBlock?.priority}
      >
        <h1
          ref={titleRef}
          className={titleInView ? "fade-in" : "not-appear-down"}
        >
          {imgBlock?.title}
        </h1>

        <div
          ref={aboutRef}
          className={`${styles.heroButtonsContainer} ${
            aboutInView ? "fade-in " : "not-appear-up"
          }`}
          style={{ marginBottom: isLastHero ? "2rem" : "0" }}
        >
          {imgBlock.buttons.map((button, index) => (
            <ButtonLink
              className={`${
                index === 0
                  ? styles.homepageButtonWhite
                  : styles.homepageButtonTransparent
              }`}
              key={index}
              href={button?.href}
            >
              {button?.text}
            </ButtonLink>
          ))}
        </div>
      </HeroComponent>
      {isLastHero && (
        <div className={styles.footer}>
          <FooterComponent />
        </div>
      )}
    </div>
  )
}

{
  /* {isLastHero && <FooterComponent />} */
}
{
  /* <div className={styles.footer}>{isLastHero && <FooterComponent />}</div> */
}
export default Hero
{
}
