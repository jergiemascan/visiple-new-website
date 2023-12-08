import React from "react"
import { ProductsList } from "../components/utilities/productsList"
import ProductBlockComponent from "../components/products/productBlockComponent"
import HeroComponent from "../components/hero/heroComponent"
import ButtonLink from "../components/button/buttonLink"
import styles from "./productsHero.module.css"

const Products = () => {
  return (
    <>
      <HeroComponent
        src="/images/product-hero.png"
        alt="Video conference from home, hero"
        priority
      >
        <ButtonLink href="/account/register" className={styles.heroButton}>
          Subscribe Now
        </ButtonLink>
      </HeroComponent>

      {ProductsList.map((products, index) => (
        <ProductBlockComponent
          key={index}
          {...products}
          reverse={index % 2 !== 0}
        />
      ))}
    </>
  )
}

export default Products
