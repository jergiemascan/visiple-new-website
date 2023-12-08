"use client"
import React from "react"
import { usePathname } from "next/navigation"

const useHeaderStyle = () => {
  const pathname = usePathname()

  const paths = ["/", "/products"]
  const isPath = paths.includes(pathname)
  console.log("Current path:", pathname)
  console.log("Is path:", isPath)
  return {
    isPath,
    headerPosition: isPath ? "headerPositionFixed" : "headerPositionStatic",
    svgFillColor: !isPath ? "var(--gray-100)" : "var(--white)",
  }
}

export default useHeaderStyle
