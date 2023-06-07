import Link from 'next/link'
import styles from '../styles/navlink.module.css'

interface NavLinkProps {
  href: string;
  label: string;
}

export default function Navbar({ href, label }: NavLinkProps) {
  return (
    <Link href={href} className={styles.link}>
      {label}
    </Link>
  )
}