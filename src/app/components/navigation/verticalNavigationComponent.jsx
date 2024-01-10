import React from "react"
import Link from "next/link"
import styles from "./verticalNavigationComponent.module.css"
import { VerticalNavigationList } from "../utilities/verticalNavigationList"

const VerticalNavigationComponent = ({ setExpanded, expanded }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navListWrapper}>
        {VerticalNavigationList.map((navlist, index) => (
          <li key={index} className={styles.list}>
            <Link
              className="flex-row justify-between align-center"
              href={navlist.href}
              onClick={() => setExpanded(false)}
            >
              <span className="span-semi-lg">{navlist.title}</span>
              <div>{navlist.svg}</div>
            </Link>
          </li>
        ))}

        <li>
          <Link
            className="flex-row"
            href="/account/signin"
            onClick={() => setExpanded(false)}
          >
            <svg
              class="icon"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="var(--gray-200)"
                d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM6.858 18.752c.605-1.868 2.722-3.24 5.142-3.24 2.42 0 4.537 1.372 5.142 3.24C15.712 19.844 13.933 20.5 12 20.5s-3.712-.656-5.142-1.748zm11.469-1.095c-1.02-2.165-3.483-3.645-6.327-3.645s-5.307 1.48-6.327 3.645A8.456 8.456 0 0 1 3.5 12c0-4.687 3.813-8.5 8.5-8.5 4.687 0 8.5 3.813 8.5 8.5a8.456 8.456 0 0 1-2.173 5.657zM12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm0 5.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"
              ></path>
            </svg>
            <span className="span-semi-lg">Account</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default VerticalNavigationComponent
