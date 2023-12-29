"use client"
import React, { useEffect, useRef, useState } from "react"

const useIntersectionObserver = options => {
  const ref = useRef(null)
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Update our state when observer callback fires
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.unobserve(ref.current)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return [ref, isIntersecting]
}
export default useIntersectionObserver
