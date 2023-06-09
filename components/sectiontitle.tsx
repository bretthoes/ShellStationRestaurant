import styles from '../styles/sectiontitle.module.css'

interface SectionTitleProps {
  title: string
  description: string
}

export default function SectionTitle({title, description}: SectionTitleProps) {
  return (
    <>
      <h2 className={styles.title}>{title}</h2>
      <h4 className={styles.description}>{description}</h4>
    </>
  )
}