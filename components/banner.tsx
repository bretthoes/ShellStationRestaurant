import React from "react"

interface BannerProps {
  imageUrl: string
  altText: string
}

export default function Banner({ imageUrl, altText }: BannerProps) {
  return (
    <>
      <div className="banner">
        <img src={imageUrl} alt={altText} />
      </div>
    </>
  )
}