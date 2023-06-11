import styles from '../styles/footer.module.css'
import FooterLogo from '../components/footerlogo'
import LogoImage from '../public/textlogodark.png'

export default function Footer() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
      </div>
      <div className={styles.footer}>
        <div className={styles.column}>
          <p>Hours of operation:</p>
          <p>8am - 8pm</p>
          <p>7 days a week</p>
        </div>
        <div className={styles.column}>
          <p>Address:</p>
          <p>1675 Highway 69</p>
          <p>Pointe au Baril, Ontario</p>
          <p>705 366 2888</p>
        </div>
        <FooterLogo imageUrl={LogoImage.src} altText="Banner Image" />
        <div></div>
        <div className={styles.trademark}>
          <p>Copyright @ 2023 Pointe au Baril Station Limited. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  )
}
