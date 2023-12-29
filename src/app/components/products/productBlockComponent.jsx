import React from "react"
import Image from "next/image"
import styles from "./productBlockComponent.module.css"
import ButtonLink from "../button/buttonLink"
import PriceButton from "../button/buttonPrice"

const ProductBlockComponent = ({
  src,
  alt,
  productName,
  title,
  description,
  features,
  price,
  subscribeLink,
  reverse = false,
  className,
}) => {
  return (
    <section
      className={`${styles.productContainer} ${className} ${
        reverse ? styles.reverse : ""
      }`}
    >
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        loading="lazy"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          height: "100%",
          width: "100%",
        }}
        layout="responsive"
      />
      <div className={styles.productContentWrapper}>
        <div>
          <h2 className={styles.h2}>{productName}</h2>
          <h3 className={styles.h3}>{title}</h3>
          <div className={styles.productsSpecification}>
            <h4 className={styles.h4}>{description}</h4>
            <ul>
              {features.map((feature, index) => (
                <li className={styles.productsLi} key={index}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1.4em"
                    viewBox="0 0 448 512"
                    // fill="var(--gray-200)"
                  >
                    <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.productButtonWrapper}>
          <PriceButton>{price}</PriceButton>
          <ButtonLink href={subscribeLink} className={styles.productButton}>
            Subscribe Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default ProductBlockComponent
