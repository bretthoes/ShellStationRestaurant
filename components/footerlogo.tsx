import React from "react"
import styles from '../styles/footerlogo.module.css'

interface FooterLogoProps {
  imageUrl: string
  altText: string
}

export default function FooterLogo({ imageUrl, altText }: FooterLogoProps) {
  return (
    <>
      <div className={styles.footerlogo}>
        <img src={imageUrl} alt={altText} />
      </div>
    </>
  )
}