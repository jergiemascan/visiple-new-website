"use client"
import { usePathname } from "next/navigation"

const useHeaderStyle = () => {
  const pathname = usePathname()

  const paths = ["/", "/products", "/costumer-service/faq"]
  const isPath = paths.includes(pathname)

  return {
    isPath,
    headerPosition: isPath ? "headerPositionFixed" : "headerPositionStatic",
    svgFillColor: !isPath ? "var(--gray-100)" : "var(--white)",
  }
}

export default useHeaderStyle
