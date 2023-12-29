"use client"
import React, { useEffect, useRef, useState } from "react"

const useIntersectionObserver = options => {
  const ref = useRef(null)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const currentRef = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIntersecting(entry.isIntersecting)
    }, options)
    if (currentRef) {
      observer.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return [ref, isIntersecting]
}
export default useIntersectionObserver
