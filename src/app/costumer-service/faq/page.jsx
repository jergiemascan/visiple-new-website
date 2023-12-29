import FaqComponent from "@/app/components/faq/faqComponent"
import FaqHeaderComponent from "@/app/components/faq/faqHeaderComponent"
import React from "react"

const Faq = () => {
  return (
    <>
      <FaqHeaderComponent />
      <div className="page-container ">
        <div className="page-inner-container ">
          <FaqComponent />
        </div>
      </div>
    </>
  )
}

export default Faq
