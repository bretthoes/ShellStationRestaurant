import Link from 'next/link'
import styles from '../styles/location.module.css'
import SectionTitle from '../components/sectiontitle'

export default function Contact() {
  const title = "Where are we?"
  const description = "Find us inside the Pointe au Baril Station"
  return (
    <>
      <SectionTitle title={title} description={description} />
      <div className={styles.container}>
        <div className={styles.address}>
          <h2>The Station</h2>
          <p>1675 Highway 69</p>
          <p>Pointe au Baril, Ontario</p>
          <p>705 366 2888</p>
          <h2>Hours</h2>
          <p>8am - 8pm, 7 days a week</p>
        </div>
        <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2791.708439442092!2d-80.3743856!3d45.5964056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4d2bf127e2e2d4ed%3A0x69bb49646da025ee!2sThe%20Station!5e0!3m2!1sen!2sca!4v1686269275525!5m2!1sen!2sca" width="600" height="450" loading="lazy"></iframe>
        </div>
      </div>
    </>
  )
}