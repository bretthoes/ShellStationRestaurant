import React from "react"
import styles from '../styles/banner.module.css'

interface BannerProps {
  imageUrl: string
  altText: string
}

export default function Banner({ imageUrl, altText }: BannerProps) {
  return (
    <>
      <div className={styles.banner}>
        <img src={imageUrl} alt={altText} />
      </div>
    </>
  )
}