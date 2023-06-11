import Link from 'next/link'
import Banner from '../components/banner'
import BannerImage from '../public/textlogo.png'

export default function Home() {
  return (
    <>
      <div>
        <Banner imageUrl={BannerImage.src} altText="Banner Image" />
      </div>
    </>
  )
}