import NavLink from './navlink'
import styles from '../styles/navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <NavLink href="/" label="Home" />
        </li>
        <li>
          <NavLink href="/menu" label="Menu" />
        </li>
        <li>
          <NavLink href="/drinks" label="Drinks" />
        </li>
        <li>
          <NavLink href="/location" label="Find us" />
        </li>
      </ul>
    </nav>
  )
}