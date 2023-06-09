import React from 'react'
import styles from './breadcrumb.module.scss'
import { Link, useLocation } from 'react-router-dom'

function Breadcrumb() {
  const location = useLocation()
  const pathnames = location.pathname
    .split('/')
    .filter((pathname) => pathname !== '')
    .map((pathname) => pathname.replace(/-/g, ' '))

  return (
    <nav aria-label='breadcrumb'>
      <ol className={styles.breadcrumb}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {pathnames.map((pathname, index) => (
          <li key={index}>
            <Link to={`/${pathnames.slice(0, index + 1).join('/')}`}>{pathname}</Link>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumb
