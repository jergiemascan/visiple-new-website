"use client"
import React, { useState } from "react"
import styles from "./faqComponent.module.css"
import { FaqList } from "../utilities/faqList"
import { useInView } from "react-intersection-observer"

const FaqComponent = () => {
  const [expandedItems, setExpandedItems] = useState(null)
  const [childrenRef, childrenInView] = useInView({ triggerOnce: true })

  const toggleFaqItem = index => {
    setExpandedItems(expandedItems === index ? null : index)
  }

  return (
    <div
      ref={childrenRef}
      className={`${childrenInView ? "fade-in " : "not-appear-up"} ${
        styles.faq
      }`}
    >
      <ul className={styles.faqList}>
        {FaqList.map((faq, index) => (
          <>
            <li key={index} className="flex-column justify-between">
              <div
                className={`flex-row justify-between align-center ${styles.faqQuestion}`}
                onClick={() => toggleFaqItem(index)}
              >
                <h3>{faq.question}</h3>
                <div
                  className={`icon ${
                    expandedItems === index ? "rotate90degree" : "rotate0degree"
                  }`}
                >
                  {faq.svg}
                </div>
              </div>
              <div
                className={
                  expandedItems === index
                    ? styles.faqAnswerExpanded
                    : styles.faqAnswerCollapsed
                }
              >
                <p>{faq.answer}</p>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  )
}

export default FaqComponent
