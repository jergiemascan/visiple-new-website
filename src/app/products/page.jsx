import React from "react"
import { ProductsList } from "../components/utilities/productsList"
import ProductBlockComponent from "../components/products/productBlockComponent"
import HeroComponent from "../components/hero/heroComponent"
import ButtonLink from "../components/button/buttonLink"
import styles from "./productsHero.module.css"

const Products = () => {
  return (
    <section>
      <h4>Products and Plans here</h4>
       <HeroComponent
        src="/images/products/product-hero.png"
        alt="Video conference from home, hero"
        priority
        className="scrollToFullElement"
      >
        <ButtonLink
          className={`${styles.heroButton} `}
          href="/account/register"
        >
          Subscribe Now
        </ButtonLink>
      </HeroComponent>

      {ProductsList.map((products, index) => (
        <ProductBlockComponent
          className="scrollToFullElement"
          key={index}
          {...products}
          reverse={index % 2 !== 0}
        />
      ))} 
    </section>
  )
}

export default Products
