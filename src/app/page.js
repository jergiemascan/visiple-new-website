"use client"
import React from "react"
import { HeroImageList } from "./components/utilities/heroImageList"
import Hero from "./components/hero/hero"

const Homepage = () => {
  return (
    <section className="scrollSnapContainer">
      {HeroImageList.map((imgBlock, index) => {
        const isLastHero = index === HeroImageList.length - 1
        return <Hero key={index} imgBlock={imgBlock} isLastHero={isLastHero} />
      })}
    </section>
  )
}

export default Homepage
